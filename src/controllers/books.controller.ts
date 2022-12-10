import { NextFunction, Request, Response } from 'express';
import { Book } from '@prisma/client';
import { CreateBookDto } from '@dtos/books.dto';
import booksService from '@services/books.service';

class BooksController {
  public booksService = new booksService();

  public getBooks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllBooksData: Book[] = await this.booksService.findAllBook();

      res.status(200).json({ data: findAllBooksData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getBookById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const booksId = Number(req.params.id);
      const findOneBookData: Book = await this.booksService.findBookById(booksId);

      res.status(200).json({ data: findOneBookData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createBook = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const booksData: CreateBookDto = req.body;
      const createBookData: Book = await this.booksService.createBook(booksData);

      res.status(201).json({ data: createBookData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateBook = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const booksId = Number(req.params.id);
      const booksData: CreateBookDto = req.body;
      const updateBookData: Book = await this.booksService.updateBook(booksId, booksData);

      res.status(200).json({ data: updateBookData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteBook = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const booksId = Number(req.params.id);
      const deleteBookData: Book = await this.booksService.deleteBook(booksId);

      res.status(200).json({ data: deleteBookData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default BooksController;
