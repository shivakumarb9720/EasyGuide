<?php

class iSpeech_Admin {

	static function init() {
		add_action('admin_init',array('iSpeech_Admin','admin_init'));
		add_action('admin_menu',array('iSpeech_Admin','admin_menu'));
	}

	static function admin_menu()
	{
		add_menu_page('WebReader Options', "WebReader", 'manage_options', ISC_PLUGIN_ID, array('iSpeech_Admin', 'options'), "dashicons-controls-volumeon", 25);
	}

	static function admin_init()
	{
		$options = get_option(ISC_PLUGIN_ID .'_options'); 
		register_setting(ISC_PLUGIN_ID .'_options',ISC_PLUGIN_ID .'_options',array(ISC_PLUGIN_ID, 'validate'));
		add_settings_section('plugin_main', 'Settings',array(ISC_PLUGIN_ID, 'section_text'), ISC_PLUGIN_ID);
		add_settings_section('error', '',array(ISC_PLUGIN_ID, 'section_text'), ISC_PLUGIN_ID);
		add_settings_field("apikey","API Key:", [ISC_PLUGIN_ID,"apikey_default"],ISC_PLUGIN_ID,'plugin_main');
		add_settings_field("voice","Voice:",array(ISC_PLUGIN_ID,"voice_default"),ISC_PLUGIN_ID,'plugin_main');
		add_settings_field("enabled","Enable WebReader Button on all pages:",array(ISC_PLUGIN_ID,"enabled_default"),ISC_PLUGIN_ID,'plugin_main');

		if(iswrPlugin::apikey_validate(trim($options['apikey'])) === "true" && $options['apikey'] != ISC_DEFAULT_KEY)
		{
			add_settings_field("highlighting","Highlighting:",array(ISC_PLUGIN_ID,"highlighting_default"),ISC_PLUGIN_ID,'plugin_main');
			add_settings_field("speed","Speed:",array(ISC_PLUGIN_ID,"speed_default"),ISC_PLUGIN_ID,'plugin_main');
			add_settings_field("ads","Ads:",array(ISC_PLUGIN_ID,"ads_default"),ISC_PLUGIN_ID,'plugin_main');
		}
	}

	static function options()
    {
        if (!current_user_can('manage_options'))                
            wp_die( __('You do not have sufficient permissions to access this page.') );
        self::options_html();
    }

    static function options_html()
   	{        
   		
        echo '<div class="wrap"><h2>'. ISC_PLUGIN_NAME .'</h2><form method="post" action="options.php">';
        settings_fields(ISC_PLUGIN_ID .'_options');
        do_settings_sections(ISC_PLUGIN_ID);        
        echo "

        <table class='form-table'><tbody><tr>
        <th scope='row'>Shortcodes usage:</th>
        <td> Specify text inside the short-code: <br> <br>
        	<b> [iSpeechWebReader text='This text is going to be read aloud when clicked on the Listen Button.'] </b> <br> <br> 
        	Specify the ID of the web element: <br> <br> 
        	<b> [iSpeechWebReader textID='textBoxID'] </b> <br>
        </td></table>
         ";
        submit_button();
        echo '</form>'. ISC_PLUGIN_NAME . ' is powered by <a href="http://www.ispeech.org">iSpeech</a>. For help contact: <a href="mailto:support@ispeech.org?subject=Wordpress+Listen+Button">support@ispeech.org</a></div>';        
   	}
	   	
   	
}

?>