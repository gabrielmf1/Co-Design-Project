document.addEventListener('DOMContentLoaded', function(){

	let db = new DB('https://codesign-9f997.firebaseio.com/')

	let tpName = new TP('template-name')

	let tpSemester = new TP('template-semester')

	let tpMateria = new TP('template-materia')

	let tpDescription = new TP('template-description')

	let tpGoals = new TP('template-goals')

	let params = new URLSearchParams(window.location.search)

 	let url = '/' + params.get('category') + '/courses/' + params.get('course') + '/'


	db.download(url, function(data) {
		let name = document.querySelector('.name')
		name.innerHTML = tpName.ganerate ({'name': data['name']})

		let semester = document.querySelector('.semester')
		semester.innerHTML = tpSemester.ganerate ({'semester': data['semester']})

		let materia = document.querySelector('.materia')
		materia.innerHTML = tpMateria.ganerate ({'materia': data['materia']})

		let description = document.querySelector('.description')
		description.innerHTML = tpDescription.ganerate ({'description': data['description']})

		let goals = document.querySelector('.goals')
		goals.innerHTML = tpGoals.ganerate ({'goals': data['goals']})

	})
})
