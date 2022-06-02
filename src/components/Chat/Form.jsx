export function Form() {
	function enviaFormulario(event) {
		event.preventDefault();

		const nome = event.target.elements.username.value;
		const mensagem = event.target.elements.message.value;

		fetch('https://6297ff048d77ad6f750b76fd.mockapi.io/messages', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				nome,
				mensagem,
			})
		})
	}

	return (
		<footer className="chat__footer">
			<form onSubmit={enviaFormulario}>
				<input name="username" type="text" placeholder="Digite seu nome" />
				<textarea name="message" placeholder="Digite sua mensagem..." />
				<button type="submit">Enviar</button>
			</form>
		</footer>
	)
}
