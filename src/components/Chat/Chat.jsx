import './Chat.css';

export function Chat({ aberto = false, fechaChat = () => {}}) {
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
				<div className='chat__message'>
					<h4>Fulano de Tal</h4>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, assumenda dolorem voluptas in quasi similique dolore quibusdam debitis</p>
				</div>

				<div className='chat__message'>
					<h4>Fulano de Tal</h4>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, assumenda dolorem voluptas in quasi similique dolore quibusdam debitis</p>
				</div>
			</div>

		</div>
	)
}
