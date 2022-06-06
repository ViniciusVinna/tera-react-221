import { useState, useEffect } from 'react';

import './Chat.css';
import { Spin } from 'antd';

import { Message } from './Message';
import { Form } from './Form';

export function Chat({ aberto = false, fechaChat = () => {}}) {
	const [carregando, alteraCarregando] = useState(true);
	const [mensagens, alteraMensagens] = useState([]);

	function buscaMensagens() {
		fetch('https://6297ff048d77ad6f750b76fd.mockapi.io/messages')
		.then(resposta => resposta.json())
		.then(resposta => {
			alteraCarregando(false);
			alteraMensagens(resposta);
		})
	}

	useEffect(() => {
		let intervalo = setInterval(() => buscaMensagens(), 10000);

		return () => clearInterval(intervalo);
	});

	return (
		<div className={`chat ${aberto ? 'aberto' : ''}`}>
			<div className="chat__header">
				<button
					type="button"
					onClick={() => fechaChat(false)}
				>
					Fechar
				</button>
			</div>

			<div className="chat__content">

				{carregando
					? <Spin />
					: mensagens.map((mensagem) =>
						<Message
							key={mensagem.id}
							nome={mensagem.nome}
							mensagem={mensagem.mensagem}
						/>
					)
				}
			</div>

			<Form />
		</div>
	)
}
