export function Message({ nome = '', mensagem = '' }) {
	return (
		<div className='chat__message'>
			<h4>{nome}</h4>
			<p>{mensagem}</p>
		</div>
	)
}
