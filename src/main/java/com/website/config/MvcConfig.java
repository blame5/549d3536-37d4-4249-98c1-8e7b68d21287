package com.website.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class MvcConfig extends WebMvcConfigurerAdapter {

    Logger logger = LoggerFactory.getLogger(getClass());
//    <mvc:resources mapping="/resources/**" location="/resources/" cache-period="10000"/>

//    @Override
//    public void addResourceHandlers(org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry registry) {
//        registry.addResourceHandler("/resources/**").addResourceLocations("/webapp/resources/").setCachePeriod(10000);
//    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
//        registry.addViewController("/home").setViewName("home");
//        registry.addViewController("/").setViewName("home");
//        registry.addViewController("/hello").setViewName("hello");
        registry.addViewController("/login").setViewName("login");
        registry.addViewController("/uploadForm").setViewName("uploadForm");
    }

    /**
     * Ensures that placeholders are replaced with property values
     */
    @Bean
    static PropertySourcesPlaceholderConfigurer propertyPlaceHolderConfigurer() {
        return new PropertySourcesPlaceholderConfigurer();
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        logger.info("Adding Cors Mapping");
        registry.addMapping("/**")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("X-FHIR-Starter", "Origin", "Accept", "X-Requested-With", "Content-Type", "Access-Control-Request-Method",
                        "Access-Control-Request-Headers", "Authorization")
                .exposedHeaders("Location", "Content-Location")
                .allowCredentials(true)
                .maxAge(300)
                .allowedOrigins("*");
    }
}
