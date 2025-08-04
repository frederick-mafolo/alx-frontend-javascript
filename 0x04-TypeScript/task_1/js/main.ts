interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; 
  }
  

  const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };

  console.log(teacher3);

  interface Director extends Teacher {
    numberOfReports: number;
  }
  
  const director1: Director = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log(director1);
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  function printTeacher({ firstName, lastName }: { firstName: string, lastName: string }): string {
    return `${firstName}. ${lastName}`;
  }
  

  console.log(printTeacher({ firstName:"John", lastName:"Doe" })); 




  // Interface for the constructor
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
  }
  
  // Interface for the class instance
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Class implementation
  class StudentClass  implements StudentClassInterface {
    private firstName: string;
    private lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  // Example usage
  const student = new StudentClass("John", "Doe");
  console.log(student.displayName()); // Output: "John"
  console.log(student.workOnHomework()); // Output: "Currently working"