import yodaImg from './img/yoda-profile.jpg';

export function Story() {
	return (
		<a href="/#" className="user__thumb">
			<span className="user__thumb__wrapper">
				<img src={yodaImg} alt=""/>
			</span>
		</a>
	)
}
