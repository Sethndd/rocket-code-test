package org.example;


import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("org.example.database.mapper")
public class BookLibrary {
    public static void main(String[] args) {
        SpringApplication.run(BookLibrary.class, args);
    }
}
