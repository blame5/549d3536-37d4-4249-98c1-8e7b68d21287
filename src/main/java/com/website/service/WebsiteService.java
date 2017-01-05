package com.website.service;


import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/service/")
@Api(description = "REST Service")
public class WebsiteService {

    @RequestMapping("/audio/upload")
    @ResponseBody
    public String home() {
        return "Hello World!";
    }
}