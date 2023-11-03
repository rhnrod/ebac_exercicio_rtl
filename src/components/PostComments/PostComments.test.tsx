// <reference= />

import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar "Olá, Jest" na lista', () => {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('textarea-tarefa'), {
            target: {
                value: 'Estudar Jest'
            }
        })
        fireEvent.click(screen.getByTestId('btn-cadastrar'))
        expect(screen.getByText('Estudar Jest')).toBeInTheDocument()
    })

    it('Deve adicionar "Olá, testes" na lista', () => {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('textarea-tarefa'), {
            target: {
                value: 'Olá, testes'
            }
        })
        fireEvent.click(screen.getByTestId('btn-cadastrar'))
        expect(screen.getByText('Olá, testes')).toBeInTheDocument()
    })

    it('Deve haver dois comentários na lista', () => {
        render(<PostComment />);
        fireEvent.change(screen.getByTestId('textarea-tarefa'), {
            target: {
                value: 'Estudar Jest'
            }
        })
        fireEvent.click(screen.getByTestId('btn-cadastrar'))

        fireEvent.change(screen.getByTestId('textarea-tarefa'), {
            target: {
                value: 'Olá, testes'
            }
        })
        fireEvent.click(screen.getByTestId('btn-cadastrar'))

        const comments = screen.getAllByTestId('li-comment')
        expect(comments).toHaveLength(2);
        
    })
});