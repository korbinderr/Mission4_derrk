using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4.Models
{
    // Create the class that will contain all the getters and setters for each input
    public class GradeCalcModel
    {
        // Insert validations; each field is required, and the input must be between 0 and 100
        [Required]
        [Range(0, 100, ErrorMessage = "Assignments must be between 0 and 100")]
        public float assignments { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Group Project must be between 0 and 100")]
        public float group { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Quizzes must be between 0 and 100")]
        public float quizzes { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Midterm Exam must be between 0 and 100")]
        public float midtermE { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Final Exam must be between 0 and 100")]
        public float finalE { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Intex must be between 0 and 100")]
        public float INTEX { get; set; }

    }
}
