<?php
/*
Plugin Name: Calculadora Hipoteca By Bisnu
Author: Bisnu Kundu
Author Uri: https://wa.link/2gws4d
Description: It's a mortgage Calculator Plugin. To change the color: [ 'label_text_color', 'result_primary_color', 'result_secondery_color']. ( Example: [calculadora_hipoteca_by_bisnu label_text_color="red" result_secondery_color='green' result_primary_color='blue'] )
Version: 1.0.0
 */

// Static variable to store shortcode attributes

// Enqueue scripts and styles
function scripts_enqueue_bisnu() {
    // Enqueue the main stylesheet
    wp_enqueue_style(
        'calculator_css_bisnu',
        plugin_dir_url(__FILE__) . "assets/index.css",
        [],
        null
    );

    // Enqueue the JavaScript file
    wp_enqueue_script(
        'calculator_js_bisnu',
        plugin_dir_url(__FILE__) . "assets/index.js",
        [],
        null,
        true // Load in footer
    );
}
add_action('wp_enqueue_scripts', 'scripts_enqueue_bisnu');

// Shortcode function
function calculate_shortcode_fn($atts, $content, $tag) {
    // Extract shortcode attributes with default values
    $atts = shortcode_atts(
        array(
            'label_text_color'       => '#000',
            'result_primary_color'   => '#7ebe93',
            'result_secondery_color' => '#e7f3ed',
        ),
        $atts,
        $tag
    );

    // Store shortcode attributes in the static variable
    // Generate dynamic CSS
    $content .= "<style>
    #form_bisnu div label {
        color: {$atts['label_text_color']};
    }
    #result_bisnu_one{
        background-color: {$atts['result_primary_color']};
    }
    #result_bisnu_two{
        background-color: {$atts['result_secondery_color']};
    }
    .input_bisnu{
        border: 1px solid {$atts['result_primary_color']} !important
    }
    input[type='range']::-webkit-slider-thumb {
        border: 3px solid {$atts['result_primary_color']};  
    }
</style>
";

    // Include the template file
    ob_start();
    include_once plugin_dir_path(__FILE__) . "calculate_template.php";
    $content .= ob_get_clean();

    return $content;
}

// Register the shortcode
function shortcode_init_bisnu() {
    add_shortcode("calculadora_hipoteca_by_bisnu", "calculate_shortcode_fn");
}
add_action('init', "shortcode_init_bisnu");