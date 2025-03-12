package org.example.database.entity;


import lombok.Data;

import java.util.List;

@Data
public class Page<T> {
    private List<T> content;
    private Long currentPage;
    private Long pageSize;
    private Long totalElements;
    private Long totalPages;

    public Page(List<T> content, Long currentPage, Long pageSize, Long totalElements) {
        this.content = content;
        this.currentPage = currentPage;
        this.pageSize = pageSize;
        this.totalElements = totalElements;
        this.totalPages = (long) Math.ceil((double) totalElements / pageSize);
    }
}
