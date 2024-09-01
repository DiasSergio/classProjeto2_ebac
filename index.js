const form = document.getElementById(`form-project`);
const imgAprovado = `<img src="./images/aprovado.png"/>`;
const imgReprovado = `<img src="./images/reprovado.png"/>`;
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const minGrade = parseFloat(prompt("Enter the minimum grade for approval:"));
const activities = [];
const grades = [];
let tableRows = ``;
// iremos criar uma funcao para alimentar essas linhas da tabela, 
// a qual se inicia vazia 

form.addEventListener(`submit`, function (e) {

    // funcao que previne que limpe os campos ao clicar no botao
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    averageGrade();
});


// funcao que ira somente adicionar uma linha nova a variavel das linhas na tabela 
function adicionaLinha() {
    const inputNameActivities = document.getElementById(`nameActivity`);
    const inputGradeActivities = document.getElementById(`gradeActivity`);

    if (activities.includes(inputNameActivities.value)) {
        alert(`The activity ${inputNameActivities.value} already exists.`)
    } else {
        activities.push(inputNameActivities.value);
        grades.push(parseFloat(inputGradeActivities.value));

        let tableRow = `<tr>`;
        tableRow += `<td> ${inputNameActivities.value} </td>`;
        tableRow += `<td> ${inputGradeActivities.value} </td>`;
        tableRow += `<td> ${inputGradeActivities.value >= minGrade ? imgAprovado : imgReprovado} </td>`;
        tableRow += `</tr > `;
        tableRows += tableRow;
    };
    inputGradeActivities.value = "";
    inputNameActivities.value = "";
};

function atualizaTabela() {
    const tableBody = document.querySelector(`tbody`);
    //recupera o corpo da tabela e inner faz adicionar novo conteúdo
    tableBody.innerHTML = tableRows;

};

function finalAverageGrade() {
    let average = 0;
    for (let i = 0; i < grades.length; i++) {
        average += grades[i]
    };
    return (average / grades.length).toFixed(2)
};

function averageGrade() {
    const finalGrade = finalAverageGrade()
    document.getElementById('finalGrade').innerHTML = finalGrade;
    document.getElementById('finalResult').innerHTML =
        finalGrade >= minGrade ? spanAprovado : spanReprovado;
};


// bug - prompt aceitando +10 