
        const student = [
            {
               name: 'Maria',
                lastname: 'da Silva',
                score: 10
            },
            {
               name: 'José',
                lastname: 'Moreira',
                score: 4
            },
            {
               name: 'Paulo',
                lastname: 'Henrique',
                score: 7
            },
            {
               name: 'Pedro',
                lastname: 'Souza',
                score: 5
            },
            {
               name: 'Sara',
                lastname: 'Souza',
                score: 5
            },
            {
               name: 'Clara',
                lastname: 'Barbosa',
                score: 9
            },
            {
               name: 'Rodrigo',
                lastname: 'Barros',
                score: 4
            },
            {
               name: 'Andrea',
                lastname: 'Batista',
                score: 6
            },
            {
               name: 'Carla',
                lastname: 'Campos',
                score: 3
            },
        ]

        const searchButton = document.querySelector('#search-button')
        const studentsList = document.querySelector('#lista-alunos')




        searchButton.onclick = function () {
            const studentsFilter = student.filter( e =>
                e.score === parseInt(this.parentElement.children[0].value)
            )

            if(studentsFilter == false){
                return studentsList.innerHTML = `
                    <li>
                        Student not found.
                    </li>
                `
            }

            let html = ''

            studentsFilter.forEach( e => 
                html += `
                    <li>
                        ${e.name} ${e.lastname} | Score: ${e.score}
                    </li>
                `
            )

            

            studentsList.innerHTML = html
        }