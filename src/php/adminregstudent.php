<?php
require 'db_conn.php';

if(isset($_POST["submit"])){
$studentId = $_POST["studentId"];
  $studentName = $_POST["studentName"];
  $studentSurname = $_POST["studentSurname"];
  $Gender = $_POST["Gender"];
  $Courses = $_POST["Courses"];
  $Course = "";
  
  foreach($Courses as $row){
    $Course .= $row . ",";
  }

  
  
 
  $query = "INSERT INTO register_studentss VALUES('$studentId', '$studentName', '$studentSurname', '$Gender', '$Course')";
  mysqli_query($conn,$query);
  echo
  "
  <script> alert('Data Inserted Successfully'); </script>
  ";
}
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Insert Data</title>
  </head>
  <style media="screen">
    label{
      display: block;
    }
  </style>
  <body>


    <form class="" action="" method="post" autocomplete="off">
     <label for="">Studentr Number</label>
     <input type="text" name="studentId" required value="">
      <label for="">Name</label>
      <input type="text" name="studentName" required value="">
      <label for="">Surname</label>
      <input type="text" name="studentSurname" required value="">
      
      <label for="">Gender</label>
      <input type="radio" name="Gender" value="Male" required> Male
      <input type="radio" name="Gender" value="Female"> Female

      <label for="">Registered Course</label>
      <label for="">Languages</label>
      <input type="checkbox" name="Courses[]" value="MATH322">MATH322
      <input type="checkbox" name="Courses[]" value="CMPE353">CMPE353
      <input type="checkbox" name="Courses[]" value="CMPE371">CMPE371
      <input type="checkbox" name="Courses[]" value="CMPE321">CMPE321
      <input type="checkbox" name="Courses[]" value="MATH322">MATH322
      <input type="checkbox" name="Courses[]" value="CMPE371">CMPE371
      <input type="checkbox" name="Courses[]" value="CMPE320">CMPE320
      <input type="checkbox" name="Courses[]" value="CMPE344">CMPE344
      <input type="checkbox" name="Courses[]" value="CMPE342">CMPE342
      <input type="checkbox" name="Courses[]" value="CMPE312">CMPE312


      

      <br>
    
      <button type="submit" name="submit">Submit</button>
    </form>
  </body>
</html>
