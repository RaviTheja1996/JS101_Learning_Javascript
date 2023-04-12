let marks = 70;

switch(marks)
  {
    case marks >= 90 && marks <= 100:
      {
        console.log("A");
        break;
      }
      case marks >= 80 && marks <= 89:
      {
        console.log("B");
        break;
      }
      case marks >= 70 && marks <= 79:
      {
        console.log("C");
        break;
      }
      case marks >= 60 && marks <= 69:
      {
        console.log("D");
        break;
      }
      case marks < 60:
      {
        console.log("F");
        break;
      }
  }