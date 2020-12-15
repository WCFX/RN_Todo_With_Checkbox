import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const data = [
  { id: uuidv4(), task: 'Estudar React-Native', done: true },
  { id: uuidv4(), task: 'Estudar React-JS', done: false },
  { id: uuidv4(), task: 'Estudar NodeJS', done: true },
  { id: uuidv4(), task: 'Estudar TypeScript', done: false },
  { id: uuidv4(), task: 'Estudar HTML', done: true },
  { id: uuidv4(), task: 'Estudar CSS', done: true },
  { id: uuidv4(), task: 'Estudar JavaScript', done: false },
  { id: uuidv4(), task: 'Jogar The Last OF US', done: false },
  { id: uuidv4(), task: 'Comprar um carro novo', done: false },
  { id: uuidv4(), task: 'Trocar de Notebook', done: false },
  { id: uuidv4(), task: 'Comprar uma mesa nova', done: false },
  { id: uuidv4(), task: 'Comprar um monitor novo', done: false },
  { id: uuidv4(), task: 'Comprar mais roupas', done: false },
];

export default data;
