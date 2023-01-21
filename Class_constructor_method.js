class Student {
    constructor(name, age, gender, mark) {
        this.studentName = name;
        this.studentAge = age,
            this.studentGender = gender,
            this.studentAverage = this.grade(mark);
    }
    grade(mark) {
        let sum = 0;
        for (let i = 0; i < mark.length; i++) {
            sum += mark[i]
        }
        return sum / mark.length
    }
}

const Ajay = new Student('Ajay', 25, 'Male', [10, 10, 10])

console.log(Ajay)