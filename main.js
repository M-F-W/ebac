document.addEventListener('DOMContentLoaded', function () {
	const name = document.querySelector('#name');
	const username = document.querySelector('#username');
	const avatar = document.querySelector('#avatar');
	const repository = document.querySelector('#repository');
	const followers = document.querySelector('#followers');
	const following = document.querySelector('#following');
	const link = document.querySelector('#link');

	fetch('https://api.github.com/users/M-F-W')
		.then(function (answer) {
			return answer.json();
		})
		.then(function (json) {
			name.innerHTML = json.name;
			username.innerHTML = '@' + json.login;
			avatar.src = json.avatar_url;
			repository.innerHTML = json.public_repos;
			following.innerHTML = json.following;
			followers.innerHTML = json.followers;
			link.href = json.html_url;
		});
});
