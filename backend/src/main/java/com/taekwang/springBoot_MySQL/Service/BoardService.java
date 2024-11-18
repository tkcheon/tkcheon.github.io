package com.taekwang.springBoot_MySQL.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.taekwang.springBoot_MySQL.model.Board;
import com.taekwang.springBoot_MySQL.repository.BoardRepository;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BoardService {
    
    
    private final BoardRepository boardRepository;

    public Board readBoard(Long id){
        Optional<Board> board = boardRepository.findById(id);
        if(board.isPresent()){
            return board.get();
        }
        throw new EntityNotFoundException(
            "Can't find any board under given ID"
        );
    }

    public List<Board> readBoard(){
        return boardRepository.findAll();
    }

    public Board createBoard(Board board){
        return boardRepository.save(board);
    }

    public BoardRepository getBoardRepository() {
        return boardRepository;
    }
}
