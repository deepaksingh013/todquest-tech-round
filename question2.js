// Get the WorksnapsTimeEntry model
var WorksnapsTimeEntryModel = mongoose.model('WorksnapsTimeEntry', WorksnapsTimeEntry);

// Loop through each student 
StudentSchema.find({}, function(err, students) {
  if (err) {
    console.error('Error retrieving students:', err);
    return;
  }

  students.forEach(function(student) {
    // Find time entries for the current student
    WorksnapsTimeEntryModel.find({ student: student._id }, function(err, timeEntries) {
      if (err) {
        console.error('Error retrieving time entries for student:', student.displayName, err);
        return;
      }

      // Display the student's time entries
      console.log('Time entries for student:', student.displayName);
      console.log(timeEntries);


    });
  });
});

