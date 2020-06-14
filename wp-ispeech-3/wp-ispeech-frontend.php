<?php

class iswrPlugin
{
	public $error = "";

    function addbutton($content) {   

        if(is_feed()||!in_the_loop()) return $content;
		
		
		global $post;
		$options = get_option(ISC_PLUGIN_ID .'_options');
		$enabledordisabled = get_post_meta( $post->ID, '_namespace', true );
		
		if(!$options['enabled'] || $enabledordisabled === "disabled") return $content;

			
       $id=get_the_ID();
		
       $options = get_option(ISC_PLUGIN_ID .'_options');        

       $spanId  ="iswpReadMe_$id";
		
       $hl = 0; 
		
		if(isset($options['highlighting'])){
			$hl = $options['highlighting'];
		}
		
       $link = self::get_link();
		
       //
       //  We offer a free service, we are able to do this because of the link.
       //  Please do not remove the link, you can style it to make 
       //  it smaller or fit your design, but not remove or hide
       //
       //
       $link ="<a href=\"{$link['link']}\" target=\"_blank\" style=\"font-size:10px;line-height:10px;border-bottom:0px;\">{$link['text']}</a><br/>";
		
       if($options['ads']==1) $link="";
		
		$speed= '0';
		
		if(isset($options['speed'])){
			$speed = $options['speed'];
		}	
		
       $voice=self::get_voice();
		
       $script = <<<endl
<script type="text/javascript">if(typeof window.iSpeechWebReaderInit=="undefined"||window.iSpeechWebReaderInit.length==0)window.iSpeechWebReaderInit=[];window.iSpeechWebReaderInit[window.iSpeechWebReaderInit.length]=function(e){if(typeof window.webReader=="undefined"||window.webReader.length==0)window.webReader=[];window.webReader[e]=new iSpeechWebReader({apiKey:"{$options['apikey']}",enableHighlight:$hl, speed:$speed,content:"+#title{$spanId};+#{$spanId}",id:e,voice:"$voice",lc:window.location})},document.write('<script src="/wp-content/plugins/wp-ispeech-3/js/iSpeechHighlighter.js" type="text/javascript"></s'+"cript>")</script> <br/>$link
endl;
       return "$script<span id=\"$spanId\">$content</span>"; 
    }
	
    function title($title,$id)
    {   
        if(is_feed()||!in_the_loop()) return $title;
        return"<span id=\"titleiswpReadMe_$id\">$title</span>";
    }
        
   // please do not modify, this is how we can offer this for free!
   function get_link()
   {
       global $id;
       $links=array(
            array('weight'=>'0.1','link' =>"https://www.ispeech.org/",'text'=>'https://www.ispeech.org'),
            array('weight'=>'0.1','link' =>"https://www.ispeech.org/",'text'=>'iSpeech.org'),
            array('weight'=>'0.1','link' =>"https://www.ispeech.org/",'text'=>'iSpeech'),
            array('weight'=>'0.1','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'https://www.ispeech.org/text.to.speech'),
            array('weight'=>'0.1','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'iSpeech'),
            array('weight'=>'0.1','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'iSpeech.org'),
            array('weight'=>'0.05','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'Text to Speech'),
            array('weight'=>'0.01','link' =>"https://www.ispeech.org/",'text'=>'text to speech'),
            array('weight'=>'0.04','link' =>"https://www.ispeech.org/",'text'=>'TTS'),
            array('weight'=>'0.005','link' =>"https://www.ispeech.org/",'text'=>'tts'),
            array('weight'=>'0.01','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'Text to Voice'),
            array('weight'=>'0.01','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'Speech Synthesis'),
            array('weight'=>'0.02','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'Text to Speech Voices'),
            array('weight'=>'0.03','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'Convert Text to Speech'),
            array('weight'=>'0.01','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'Free Text to Speech'),
            array('weight'=>'0.05','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'iSpeech'),
            array('weight'=>'0.05','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'Powered by iSpeech'),
            array('weight'=>'0.02','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'Text to Speech Demo'),
            array('weight'=>'0.018','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'TTS Demo'),
            array('weight'=>'0.002','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'english text to speech voices'),
            array('weight'=>'0.001','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'spanish text to speech voices'),
            array('weight'=>'0.001','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'english text to speech'),
            array('weight'=>'0.001','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'uk text to speech'),
            array('weight'=>'0.001','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'british tts'),
            array('weight'=>'0.001','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'british text to speech'),
            array('weight'=>'0.001','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'arabic tts'),
            array('weight'=>'0.001','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'german tts'),
            array('weight'=>'0.001','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'german text to speech'),
            array('weight'=>'0.001','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'brazillian text to speech'),
            array('weight'=>'0.001','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'portuguese text to speech'),
            array('weight'=>'0.001','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'portuguese tts'),
            array('weight'=>'0.001','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'french tts'),
            array('weight'=>'0.001','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'french text to speech'),
            array('weight'=>'0.001','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'chinese tts'),
            array('weight'=>'0.001','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'japanese text to speech'),
            array('weight'=>'0.001','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'chinese text to speech'),
            array('weight'=>'0.001','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'korean tts'),
            array('weight'=>'0.001','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'korean text to speech'),
            array('weight'=>'0.001','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'australian text to speech'),
            array('weight'=>'0.001','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'natural text to speech'),
            array('weight'=>'0.001','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'natural tts'),
            array('weight'=>'0.001','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'high definition text to speech'),
            array('weight'=>'0.001','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'high definition tts'),
            array('weight'=>'0.001','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'dutch tts'),
            array('weight'=>'0.001','link' =>"https://www.ispeech.org/text.to.speech",'text'=>'dutch text to speech')
        );

        $rt=0;
        mt_srand($id);        
        $r = mt_rand(1,1000); 

	   foreach($links as $link)
        {            
            $rt=bcadd(bcmul($link['weight'],1000),$rt);  
		   	if($r<=$rt)            
                return $link;            
        }
        return $links[0];

   }
   
   
   function get_voice()
   {
       $v=array("usenglishfemale", "usenglishmale", "ukenglishfemale", "ukenglishmale", "auenglishfemale", "usspanishfemale", "usspanishmale", "chchinesefemale", "chchinesemale", "hkchinesefemale", "twchinesefemale", "eurcatalanfemale", "eurczechfemale", "eurdanishfemale", "eurfinnishfemale", "eurfrenchfemale", "eurfrenchmale", "eurnorwegianfemale", "eurdutchfemale", "eurpolishfemale", "euritalianfemale", "euritalianmale", "jpjapanesefemale", "jpjapanesemale", "krkoreanfemale", "krkoreanmale", "caenglishfemale", "huhungarianfemale", "brportuguesefemale", "eurportuguesefemale", "eurportuguesemale", "eurspanishfemale", "eurspanishmale", "eurturkishfemale", "eurturkishmale", "eurgreekfemale", "eurgermanfemale", "eurgermanmale", "rurussianfemale", "rurussianmale", "swswedishfemale", "cafrenchfemale", "cafrenchmale", "arabicmale");
       $options = get_option(ISC_PLUGIN_ID .'_options'); 
       return $v[(int)$options['voice']];
   }
   
   
   function apikey_default()
   {
        $options = get_option(ISC_PLUGIN_ID .'_options');   

        if(($message = self::apikey_validate(trim($options['apikey']))) !== "true"){
          $options['apikey'] = ISC_DEFAULT_KEY;
        }       

        $text = "<input id='apikey' name='". ISC_PLUGIN_ID."_options[apikey]' size='40' type='text' value='{$options['apikey']}' />";
        if($message !== "true"){
        	$append = "<br><br><span style='color: red;'>" . $message . "</span>";
          $text .= $append;
        }

	$text .= "To unlock all the features get an API key, <a href='
https://www.ispeech.org/commercial/contact?subject=sales&message=I%20am%20interested%20in%20a%20Premium%20API%20key%20for%20the%20iSpeech%20Wordpress%20Plugin'>here</a>";
        echo $text;
        
   }
	
	function curlValidateApi($api){
		if($api){
			$curl_request = curl_init();

			curl_setopt($curl_request, CURLOPT_URL, "http://api.ispeech.org/api/rest?apikey=".$api."&action=information&output=rest");
			curl_setopt($curl_request, CURLOPT_RETURNTRANSFER, 1);
			
			$result = curl_exec($curl_request);

			if ($result === false) {
				return "Ups, validation failed. Please try again later.";
			} else {
				return $result;
			}
			curl_close($curl_request);
		}
	}
	
   function apikey_validate($key)
   {
	   $validate = explode("&", self::curlValidateApi($key));
	   if($validate[0]){
	   	$message = explode("=", $validate[0]);
	   }

       if($message[1] == "success"){
       	return "true";
       } else {
       	if($validate[2]){
       		$message = explode("=", $validate[2]);
       		if($message[1]){
       			return urldecode($message[1]);
       		}
       	}
       }

       return false;
   }
	
   function validate($options)
   {
       if($options['apikey']==ISC_DEFAULT_KEY)
       {
           $options['highlighting']=0;
           $options['ads']=0;
           $options['speed']=0;
       }
       return $options;
   }
   
   function section_text()
   {
        
   }
	function enabled_default(){
		 $options = get_option(ISC_PLUGIN_ID .'_options'); ?>
		<select id='enabled' name='<?php echo ISC_PLUGIN_ID;?>_options[enabled]'>
			<option value="1"<?php echo ( ($options['enabled'] == 1 && $options['enabled'] == null) ?" selected='selected'":"") ?>>Enabled</option>
            <option value="0"<?php echo ($options['enabled']==0?" selected='selected'":"") ?>>Disabled</option>
        </select><?php
	}
	
   function voice_default()
   {
        $options = get_option(ISC_PLUGIN_ID .'_options');    
        ?><select id='voice' name='<?php echo ISC_PLUGIN_ID;?>_options[voice]'>
            <option value="0"<?php echo ($options['voice']==0?" selected='selected'":"") ?>>US English Female</option>
            <option value="1"<?php echo ($options['voice']==1?" selected='selected'":"") ?>>US English Male</option>
            <option value="2"<?php echo ($options['voice']==2?" selected='selected'":"") ?>>UK English Female</option>
            <option value="3"<?php echo ($options['voice']==3?" selected='selected'":"") ?>>UK English Male</option>
            <option value="4"<?php echo ($options['voice']==4?" selected='selected'":"") ?>>AU English Female</option>
            <option value="5"<?php echo ($options['voice']==5?" selected='selected'":"") ?>>US Spanish Female</option>
            <option value="6"<?php echo ($options['voice']==6?" selected='selected'":"") ?>>US Spanish Male</option>
            <option value="7"<?php echo ($options['voice']==7?" selected='selected'":"") ?>>Chinese Female</option>
            <option value="8"<?php echo ($options['voice']==8?" selected='selected'":"") ?>>Chinese Male</option>
            <option value="9"<?php echo ($options['voice']==9?" selected='selected'":"") ?>>Catonese Female</option>
            <option value="10"<?php echo ($options['voice']==10?" selected='selected'":"") ?>>Taiwan Female</option>
            <option value="11"<?php echo ($options['voice']==11?" selected='selected'":"") ?>>Catalan Female</option>
            <option value="12"<?php echo ($options['voice']==12?" selected='selected'":"") ?>>Czech Female</option>
            <option value="13"<?php echo ($options['voice']==13?" selected='selected'":"") ?>>Danish Female</option>
            <option value="14"<?php echo ($options['voice']==14?" selected='selected'":"") ?>>Finnish Female</option>
            <option value="15"<?php echo ($options['voice']==15?" selected='selected'":"") ?>>French Female</option>
            <option value="16"<?php echo ($options['voice']==16?" selected='selected'":"") ?>>French Male</option>
            <option value="17"<?php echo ($options['voice']==17?" selected='selected'":"") ?>>Norweigian Female</option>
            <option value="18"<?php echo ($options['voice']==18?" selected='selected'":"") ?>>Dutch Female</option>
            <option value="19"<?php echo ($options['voice']==19?" selected='selected'":"") ?>>Polish Female</option>
            <option value="20"<?php echo ($options['voice']==20?" selected='selected'":"") ?>>Italian Female</option>
            <option value="21"<?php echo ($options['voice']==21?" selected='selected'":"") ?>>Italian Male</option>
            <option value="22"<?php echo ($options['voice']==22?" selected='selected'":"") ?>>Japanese Female</option>
            <option value="23"<?php echo ($options['voice']==23?" selected='selected'":"") ?>>Japanese Male</option>
            <option value="24"<?php echo ($options['voice']==24?" selected='selected'":"") ?>>Korean Female</option>
            <option value="25"<?php echo ($options['voice']==25?" selected='selected'":"") ?>>Korean Male</option>
            <option value="26"<?php echo ($options['voice']==26?" selected='selected'":"") ?>>CA English Female</option>
            <option value="27"<?php echo ($options['voice']==27?" selected='selected'":"") ?>>Hungarian Female</option>
            <option value="28"<?php echo ($options['voice']==28?" selected='selected'":"") ?>>BR Portuguese Female</option>
            <option value="29"<?php echo ($options['voice']==29?" selected='selected'":"") ?>>EU Portuguese Female</option>
            <option value="30"<?php echo ($options['voice']==30?" selected='selected'":"") ?>>EU Portuguese Male</option>
            <option value="31"<?php echo ($options['voice']==31?" selected='selected'":"") ?>>Spain Spanish Female</option>
            <option value="32"<?php echo ($options['voice']==32?" selected='selected'":"") ?>>Spain Spanish Male</option>
            <option value="33"<?php echo ($options['voice']==33?" selected='selected'":"") ?>>Turkish Female</option>
            <option value="34"<?php echo ($options['voice']==34?" selected='selected'":"") ?>>Turkish Male</option>
            <option value="35"<?php echo ($options['voice']==35?" selected='selected'":"") ?>>Greek Female</option>
            <option value="36"<?php echo ($options['voice']==36?" selected='selected'":"") ?>>German Female</option>
            <option value="37"<?php echo ($options['voice']==37?" selected='selected'":"") ?>>German Male</option>
            <option value="38"<?php echo ($options['voice']==38?" selected='selected'":"") ?>>Russian Female</option>
            <option value="39"<?php echo ($options['voice']==39?" selected='selected'":"") ?>>Russian Male</option>
            <option value="40"<?php echo ($options['voice']==40?" selected='selected'":"") ?>>Swedish Female</option>
            <option value="41"<?php echo ($options['voice']==41?" selected='selected'":"") ?>>CA French Female</option>
            <option value="42"<?php echo ($options['voice']==42?" selected='selected'":"") ?>>CA French Male</option>
            <option value="43"<?php echo ($options['voice']==43?" selected='selected'":"") ?>>Arabic Male</option>
        </select><?php
   }
   function speed_default()
   {
        $options = get_option(ISC_PLUGIN_ID .'_options'); 
        echo "<select id='speed' name='". ISC_PLUGIN_ID."_options[speed]'><option value='-2'".($options['speed']==-2?" selected='selected'":"").">Slowest</option><option value='-1'".($options['speed']==-1?" selected='selected'":"").">Slower</option><option value='0'".($options['speed']==0?"selected='selected'":"").">Normal</option><option value='1'".($options['speed']==1?" selected='selected'":"").">Faster</option><option value='2'".($options['speed']==2?" selected='selected'":"").">Fastest</option></select>";
   }
   function ads_default()
   {
        $options = get_option(ISC_PLUGIN_ID .'_options');    
        echo "<label for='ads_1'><input id='ads_1' name='". ISC_PLUGIN_ID."_options[ads]' size='40' type='radio' value='1' ". ($options['ads']==1?"checked='checked'":"") ."/>Disabled</label> &nbsp; <label for='ads_0'><input id='ads_0' name='". ISC_PLUGIN_ID."_options[ads]' size='40' type='radio' value='0' ". ($options['ads']==0?"checked='checked'":"") ."/>Enabled</label>";
   }
   function highlighting_default()
   {
       $options = get_option(ISC_PLUGIN_ID .'_options');        
       echo "<label for='highlighting_1'><input id='highlighting_1' name='". ISC_PLUGIN_ID."_options[highlighting]' size='40' type='radio' value='1' ". ($options['highlighting']==1?"checked='checked'":"") ."/>Enabled</label> &nbsp; <label for='highlighting_0'><input id='highlighting_0' name='". ISC_PLUGIN_ID."_options[highlighting]' size='40' type='radio' value='0' ". ($options['highlighting']==0?"checked='checked'":"") ."/>Disabled</label>";
   }
   
}

?>