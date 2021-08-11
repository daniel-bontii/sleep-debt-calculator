const getSleepHours = day => {
    if(day === 'monday'){
      return 8;
    }else if(day === 'tuesday'){
      return 6;
    }else if(day === 'wednesday'){
      return 10;
    }else if(day === 'thursday'){
      return 7;
    }else if(day === 'friday'){
      return 6;
    }else if(day === 'saturday'){
      return 5;
    }else if(day === 'sunday'){
      return 8;
    }  
  };
  
  /*get actual sleep hours using sleep hours function
  const getActualSleepHours = () => {
    return getSleepHours('monday') 
    + getSleepHours('tuesday') 
    + getSleepHours('wednesday') 
    + getSleepHours('thursday') 
    + getSleepHours('friday') 
    + getSleepHours('saturday') 
    + getSleepHours('sunday');
  };*/
  
  //get actual sleep hours using literal numbers
  const getActualSleepHours = () =>  8 + 6 + 10 + 7 + 6 + 5 + 8;
  
  /* Use fixed ideal hours
  const getIdealSleepHours = () => {
    const IdealSleepHours = 8;
    return IdealSleepHours * 7;
  }; */
  
  // Allow user enter their ideal sleep hours
  const getIdealSleepHours = IdealSleepHours => IdealSleepHours * 7;
  
  const calculateSleepDebt = () =>{
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
    if(actualSleepHours === idealSleepHours){
      console.log('You got the perfect amount of sleep');
    }else if(actualSleepHours > idealSleepHours){
      console.log('You got more sleep than needed. You slept ' + (actualSleepHours - idealSleepHours) + ' extra hour(s)!');
    }else{
      console.log('You should get more rest. You got ' + (idealSleepHours - actualSleepHours) 
      + ' hour(s) less sleep.');
    }
  };
  
  calculateSleepDebt();
  
  