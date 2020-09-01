import { Student } from "../model/student";
import { Course } from "../model/course";
import { Tuition } from "../model/tuition";

/**
 * Contém as principais funcionalidades para criar todo o corpo de dados
 * fictício do front-end. 
 */
export class DataGenerator {

    private possibleNames:string[] = ['Alice',
    'Sophia',
    'Helena',
    'Valentina',
    'Laura',
    'Isabella',
    'Manuela',
    'Júlia',
    'Heloísa',
    'Luiza',
    'Maria Luiza',
    'Lorena',
    'Lívia',
    'Giovanna',
    'Maria Eduarda',
    'Beatriz',
    'Maria Clara',
    'Cecília',
    'Eloá',
    'Lara',
    'Maria Júlia',
    'Isadora',
    'Mariana',
    'Emanuelly',
    'Ana Júlia',
    'Ana Luiza',
    'Ana Clara',
    'Melissa',
    'Yasmin',
    'Maria Alice',
    'Isabelly',
    'Lavínia',
    'Esther',
    'Sarah',
    'Elisa',
    'Antonella',
    'Rafaela',
    'Maria Cecília',
    'Liz',
    'Marina',
    'Nicole',
    'Maitê',
    'Isis',
    'Alícia',
    'Luna',
    'Rebeca',
    'Agatha',
    'Letícia',
    'Maria-',
    'Gabriela',
    'Ana Laura',
    'Catarina',
    'Clara',
    'Ana Beatriz',
    'Vitória',
    'Olívia',
    'Maria Fernanda',
    'Emilly',
    'Maria Valentina',
    'Milena',
    'Maria Helena',
    'Bianca',
    'Larissa',
    'Mirella',
    'Maria Flor',
    'Allana',
    'Ana Sophia',
    'Clarice',
    'Pietra',
    'Maria Vitória',
    'Maya',
    'Laís',
    'Ayla',
    'Ana Lívia',
    'Eduarda',
    'Mariah',
    'Stella',
    'Ana',
    'Gabrielly',
    'Sophie',
    'Carolina',
    'Maria Laura',
    'Maria Heloísa',
    'Maria Sophia',
    'Fernanda',
    'Malu',
    'Analu',
    'Amanda',
    'Aurora',
    'Maria Isis',
    'Louise',
    'Heloise',
    'Ana Vitória',
    'Ana Cecília',
    'Ana Liz',
    'Joana',
    'Luana',
    'Antônia',
    'Isabel',
    'Bruna',
    'Miguel',
    'Arthur',
    'Bernardo',
    'Heitor',
    'Davi',
    'Lorenzo',
    'Théo',
    'Pedro',
    'Gabriel',
    'Enzo',
    'Matheus',
    'Lucas',
    'Benjamin',
    'Nicolas',
    'Guilherme',
    'Rafael',
    'Joaquim',
    'Samuel',
    'Enzo Gabriel',
    'João Miguel',
    'Henrique',
    'Gustavo',
    'Murilo',
    'Pedro Henrique',
    'Pietro',
    'Lucca',
    'Felipe',
    'João Pedro',
    'Isaac',
    'Benício',
    'Daniel',
    'Anthony',
    'Leonardo',
    'Davi Lucca',
    'Bryan',
    'Eduardo',
    'João Lucas',
    'Victor',
    'João',
    'Cauã',
    'Antônio',
    'Vicente',
    'Caleb',
    'Gael',
    'Bento',
    'Caio',
    'Emanuel',
    'Vinícius',
    'João Guilherme',
    'Davi Lucas',
    'Noah',
    'João Gabriel',
    'João Victor',
    'Luiz Miguel',
    'Francisco',
    'Kaique',
    'Otávio',
    'Augusto',
    'Levi',
    'Yuri',
    'Enrico',
    'Thiago',
    'Ian',
    'Victor Hugo',
    'Thomas',
    'Henry',
    'Luiz Felipe',
    'Ryan',
    'Arthur Miguel',
    'Davi Luiz',
    'Nathan',
    'Pedro Lucas',
    'Davi Miguel',
    'Raul',
    'Pedro Miguel',
    'Luiz Henrique',
    'Luan',
    'Erick',
    'Martin',
    'Bruno',
    'Rodrigo',
    'Luiz Gustavo',
    'Arthur Gabriel',
    'Breno',
    'Kauê',
    'Enzo Miguel',
    'Fernando',
    'Arthur Henrique',
    'Luiz Otávio',
    'Carlos Eduardo',
    'Tomás',
    'Lucas Gabriel',
    'André',
    'José',
    'Yago',
    'Danilo',
    'Anthony Gabriel',
    'Ruan',
    'Miguel Henrique',
    'Oliver'];
    
    private possibleSurnames:string[] = ['Souza',
    'Costa',
    'Santos',
    'Oliveira',
    'Pereira',
    'Rodrigues',
    'Almeida',
    'Nascimento',
    'Lima',
    'Araújo',
    'Fernandes',
    'Carvalho',
    'Gomes',
    'Martins',
    'Rocha',
    'Ribeiro',
    'Alves',
    'Monteiro',
    'Mendes',
    'Barros',
    'Freitas',
    'Barbosa',
    'Pinto',
    'Moura',
    'Cavalcanti',
    'Dias',
    'Castro',
    'Campos',
    'Cardoso',
    'Corrêa',
    'Batista',
    'Grain',
    'Vidal'];

    private availableCourses:string[] = ['Administração', 'Engenharia Civil', 'Relações Humanas (RH)', 'Engenharia de Produção', 'Ciências Contábeis', 'Marketing', 'Ciência da Computação', 'Direito', 'Engenharia Mecânica', 'Relações Internacionais', 'Tecnologia em Análise e Desenvolvimento de Sistemas', 'Gestão Comercial'];

    /**
     * Função para randomizar um inteiro, útil em diversas partes do código.
     * @param min 
     * @param max 
     */
    private randomInt(min, max) {
        return min + Math.floor((max - min) * Math.random());
    }

    private randomFloat(min, max) {
        return min + ((max - min) * Math.random());
    }

    /**
     * Retorna um nome completo aleatório.
     */
    private getOneName():string{
        var max_surnames:number = this.randomInt(1, 4);
        var fullname:string = '';

        fullname+=this.possibleNames[Math.floor(Math.random() * this.possibleNames.length)];

        for(max_surnames; max_surnames > 0; max_surnames--){
            fullname+=' ' + this.possibleSurnames[Math.floor(Math.random() * this.possibleSurnames.length)];
        }

        return fullname;
    }


    /**
     * Retorna um array de estudantes aleatório para o curso.
     */
    private getOneCourse(coursename:string):Course{
        var quantity_of_students:number = this.randomInt(5, 500);
        const course:Course = new Course();
        course.duration = this.randomInt(4, 5);
        course.name = coursename;
        course.price = this.randomFloat(20, 60); ;//talvez tenha que corrigir essa bagaça aqui na quinta;
        
        course.students = [];
        for(quantity_of_students; quantity_of_students > 0; quantity_of_students--){
            course.students.push(this.getOneStudent(course));
        }
        
        return course;

    }


    private getOneStudent(course:Course):Student{
        var student = new Student();
        student.name = this.getOneName();
        student.picture = 'default_avatar.png';
        student.half = this.randomInt(1, course.duration);
        student.tuitions = [];
        var max_possible_tuitions:number = student.half * 6;

        for(max_possible_tuitions; max_possible_tuitions > 0; max_possible_tuitions--){

            var tuition:Tuition = new Tuition();
            tuition.month = this.randomInt(1, 12);
            tuition.year = this.randomInt(20 - course.duration, 20);
            tuition.price = course.price / (course.duration * 12); // se tiver descontos, ai tem que mudar né rs;
            tuition.paid = Math.random() < 0.5; //o valor randômico pode ocasionar problemas se a probabilidade ficar muito em 0;
            
            var tuition_already_added:boolean = false;
            for(let i = 0; i < student.tuitions.length; i++){
                if(student.tuitions[i].year == tuition.year && student.tuitions[i].month == tuition.month){ //evita que fique a mesma parcela no mesmo mês.
                    tuition_already_added = true;
                }
            }

            if(!tuition_already_added){
                student.tuitions.push(tuition);
            }
        }

        return student;
    }


    public getCourses(){
        let courses:Course[] = [];
        for(let i = 0; i < this.availableCourses.length; i++){
            courses.push(this.getOneCourse(this.availableCourses[i]));
        }
        return courses;
    }
}
