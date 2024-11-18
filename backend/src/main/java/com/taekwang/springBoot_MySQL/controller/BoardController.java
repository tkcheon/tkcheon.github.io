package com.taekwang.springBoot_MySQL.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.taekwang.springBoot_MySQL.Service.BoardService;
import com.taekwang.springBoot_MySQL.model.Board;

@RestController
@RequestMapping("/api/board")
public class BoardController {
    
    private final BoardService boardService;

    @Autowired
    public BoardController(BoardService boardService){
        this.boardService = boardService;
    }


    

    @PostMapping("/create")
    public Board createBoard(@RequestBody Board board){
        return boardService.createBoard(board);
    }

    @GetMapping("/all")
    public List<Board> getAllBoards(){
        return boardService.readBoard();
    }
}
