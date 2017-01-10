package com.website;

import org.slf4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Arrays;

import static org.slf4j.LoggerFactory.getLogger;

/**
 * Created by xinguo on 12/28/16.
 */
@SpringBootApplication
@EnableSwagger2
@EnableAutoConfiguration
public class UIApplication {
    static Logger logger = getLogger(UIApplication.class);

    //start up url http://localhost:15081/audio/login xin's comment
    public static void main(String[] args) {
        SpringApplication.run(UIApplication
                .class, args);
    }
}
