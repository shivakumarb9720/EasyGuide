<?php
/*
Plugin Name: Text to Speech Web Reader by iSpeech
Plugin URI: https://www.ispeech.org/integration/wordpress
Description: Let your visitors HEAR what you write about! Adds a "Listen" button to every post. 
Author: iSpeech
Version: 2.2
Author URI: http://www.ispeech.org/

Version History:
2.0 Total System Upgrade
2.1 Fixed issue with html formatting
*/

define('ISC_PLUGIN_NAME',"Text to Speech Web Reader by iSpeech");
define('ISC_DEFAULT_KEY',"default-ispeech-listenbutton-key");
define('ISC_PLUGIN_ID',"iswrPlugin");
define('ISC_VERSION',"2.1");

include_once ("wp-ispeech-frontend.php");


function add_to_head(){ ?>			
	<script type='text/javascript' src = "//www.ispeech.org/scripts/jquery.1.7.2.js" ></script>
	<script type='text/javascript' src = "//www.ispeech.org/scripts/audiojs.is.js"></script>
	<script src="//www.ispeech.org/scripts/iSpeechHighlighter-alttagsoff.js" type="text/javascript"></script>
	<style>
		#ispeech_wizard_container {
			position: relative;
			display: inline-block;
			width: 70px;
			height: 24px;
		}
		.ispeech_wizard_button {
			display: inline-block;
				position:relative;
			background: url(http://www.ispeech.org/images/webreader/listen.png) no-repeat center center;
			width: 68px;
			height: 23px;
			vertical-align: middle;
		}
		.ispeech_wizard_button_download {
			display: inline-block;
				position:relative;
			background: url(http://www.ispeech.org/images/webreader/listenDownload.gif) no-repeat center center;
			width: 95px;
			height: 23px;
			vertical-align: middle;
		}
		.iSpeechHighlightWord {
		background: #5C7AF2;
		color: #FFFFFF;
		}
		.iSpeechHighlightSentence {
		background: #DADFF5
		}
		.ispeech_wizard_button_p {
		width:100%;
		left:0px;
		position:absolute;
		top:0px;
		height:100%;
		}
		.ispeech_wizard_button_d {
		width:27px;
		left:68px;
		position:absolute;
		top:0px;
		height:23px;
		}
		.ispeech_wizard_button_stop {
			display: inline-block;
			position:relative;
			background: url(http://www.ispeech.org/images/webreader/listenPauseAnimated.gif) no-repeat center center;
			width: 68px;
			height: 23px;
			vertical-align: middle;
		}
		.ispeech_wizard_button_download_stop {
			display: inline-block;
			position:relative;
			background: url(http://www.ispeech.org/images/webreader/listenDownload.gif) no-repeat center center;
			width: 95px;
			height: 23px;
			vertical-align: middle;
		}
		#ispeech_wizard_count {
			display: none;
			position: absolute !important;
			width: 66px !important;
			background: #f8f8f8 !important;
			border: 1px solid #cdcdcd !important;
			text-align: center !important;
			margin-bottom: -33px !important;
			top: -200% !important;
			padding: 6px 0px !important;
		}
		#ispeech_wizard_count_border {
			border-color: #cdcdcd transparent transparent transparent !important;
			border-style: solid !important;
			border-width: 8px !important;
			height: 0 !important;
			width: 0 !important;
			position: absolute !important;
			bottom: -17px !important;
			left: 25px !important;
		}
		#ispeech_wizard_count_arrow {
			border-color: #f8f8f8 transparent transparent transparent !important;
			border-style: solid !important;
			border-width: 8px !important;
			height: 0 !important;
			width: 0 !important;
			position: absolute !important;
			bottom: -16px !important;
			left: 25px !important;
		}
		.ispeech_display {
			display: block !important;
			visibility: visible;
			opacity: 1;
			filter: alpha(opacity=100);
		}
	</style>
<?php }

if(is_admin())
{
    include_once ("wp-ispeech-admin.php");
    add_action( 'init', array( 'iSpeech_Admin', 'init' ) ); 
}

function include_js() {

	add_action('wp_head', 'add_to_head');

	if(function_exists('add_action'))
	{
	    add_filter("the_content",array(ISC_PLUGIN_ID,"addbutton"),-100); 
	    add_filter("the_title",array(ISC_PLUGIN_ID,"title"),-100,2); 
	}
}
add_action( 'wp_enqueue_scripts', 'include_js' );

function _namespace_create_metabox() {

	add_meta_box( '_namespace_metabox', 'WebReader', '_namespace_render_metabox', 'post', 'normal', 'default' );
	add_meta_box( '_namespace_metabox', 'WebReader', '_namespace_render_metabox', 'page', 'normal', 'default' );

}

$options = get_option(ISC_PLUGIN_ID .'_options');

if($options['enabled']){
	add_action( 'add_meta_boxes', '_namespace_create_metabox' );
} 

function _namespace_render_metabox() {
	global $post;
	$details = get_post_meta( $post->ID, '_namespace', true );
	?>
	<p>
        <label for="_namespace_custom_metabox">Enable WebReader Button on this page/post</label>
        <select name="_namespace_custom_metabox" id="_namespace_custom_metabox">
            <option value="enabled" <?php selected( $details, 'enabled' ); ?>>Enabled</option>
            <option value="disabled" <?php selected( $details, 'disabled' ); ?>>Disabled</option>
        </select>
    </p>
	<?php
	wp_nonce_field( '_namespace_form_metabox_nonce', '_namespace_form_metabox_process' );
}

function _namespace_save_metabox( $post_id, $post ) {

	if ( !isset( $_POST['_namespace_form_metabox_process'] ) ) return;

	if ( !wp_verify_nonce( $_POST['_namespace_form_metabox_process'], '_namespace_form_metabox_nonce' ) ) {
		return $post->ID;
	}

	if ( !current_user_can( 'edit_post', $post->ID )) {
		return $post->ID;
	}

	if ( !isset( $_POST['_namespace_custom_metabox'] ) ) {
		return $post->ID;
	}

	$sanitized = wp_filter_post_kses( $_POST['_namespace_custom_metabox'] );
	update_post_meta( $post->ID, '_namespace', $sanitized );

}
add_action( 'save_post', '_namespace_save_metabox', 1, 2 );



	function ispeech_shortcode($atts) {
		
       $options = get_option(ISC_PLUGIN_ID .'_options');        

       $script = '';

       if(isset($atts['textid'])){
   	       $spanId = $atts['textid'];
       }

       if(isset($atts['text'])){       		
       		$spanId = 'iswpReadMe_'.rand();
       		$script .= "<div id='".$spanId."' style='display: none;'> ".$atts['text']. "</div>";
       }

		$hl = 0;
		if(isset($options['highlighting'])){
			$hl = $options['highlighting'];
		}
       $link = iswrPlugin::get_link();

       //
       //  We offer a free service, we are able to do this because of the link.
       //  Please do not remove the link, you can style it to make 
       //  it smaller or fit your design, but not remove or hide
       //
       $link ="<a href=\"{$link['link']}\" target=\"_blank\" style=\"font-size:10px;line-height:10px;border-bottom:0px;\">{$link['text']}</a><br/>";
       if($options['ads']==1){
       	 $link="";
       }
		
       $speed= '0';
		
		if(isset($options['speed'])){
			$speed = $options['speed'];
		}
		
       $voice=iswrPlugin::get_voice();
		
       $script .= <<<endl
<script type="text/javascript">if(typeof window.iSpeechWebReaderInit=="undefined"||window.iSpeechWebReaderInit.length==0)window.iSpeechWebReaderInit=[];window.iSpeechWebReaderInit[window.iSpeechWebReaderInit.length]=function(e){if(typeof window.webReader=="undefined"||window.webReader.length==0)window.webReader=[];window.webReader[e]=new iSpeechWebReader({apiKey:"{$options['apikey']}",enableHighlight:$hl, speed:$speed,content:"+#{$spanId}",id:e,voice:"$voice",lc:window.location})},document.write('<script src="/wp-content/plugins/wp-ispeech-3/js/iSpeechHighlighter.js" type="text/javascript"></s'+"cript>")</script>  <br/>$link
endl;
       
    	return $script;

	}
	add_shortcode('iSpeechWebReader', 'ispeech_shortcode');
