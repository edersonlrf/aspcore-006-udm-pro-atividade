import React from 'react'
import Atividade from './Atividade';

/**
 * props:
 * - atividades
 * - deletarAtividade
 * - pegarAtividade
 */
export default function AtividadeLista(props) {
    return (
        <div className="mt-3">
            {props.atividades.map(ativ => (
                <Atividade key={ativ.id}
                    ativ={ativ}
                    deletarAtividade={props.deletarAtividade}
                    pegarAtividade={props.pegarAtividade}
                />
            ))}
        </div>
    )
}
