
var StepTimes = [0.05, 0.15, 0.25, 0.10, 0.20, 0.20, 0.05, 0.00];
var numSteps = StepTimes.length;

var StepTitles = [
  "Step 1 - Understand your assignments and select a topic",
  "Step 2 - Do your research",
  "Step 3 - Read and summarize your sources",
  "Step 4 - Draft your thesis and outline",
  "Step 5 - Write your draft",
  "Step 6 - Revise your draft",
  "Step 7 - Finalize your paper",
  "Step 8 - Submit your assignment" 
];

//Remember that the array is 0 based. So 0 is actually step 1, 1 is step 2 and so on...
//in order to use the " character within a body's string, use the \ character before it.
var StepBody = [];
StepBody[0] = "<p><strong>A.</strong> Read through your assignment guidelines and note any suggestions or requirements such as the grading criteria, the topic, the number and type of sources, the citation style, and the page limit. These will be your guidelines to make sure you’re correctly completing the assignment. Return to it regularly.</p>" +
  "<p><strong>B.</strong> You may have an open choice of topic or need to select one from a list of potential subjects. Either way, you’ll have to conduct a preliminary investigation to find a topic you’re interested in with a depth of coverage that can easily be explored. You should also do a general keyword search and look at encyclopedias and literature reviews to narrow your topic and determine a few subtopics. That will help you in your next step.</p>" +
  "<ul>" +
  "<li>Our video, <a href='https://library.uwinnipeg.ca/use-the-library/help-with-research/planning-your-research.html' target='_blank'>Understanding Research Assignments</a>, will help you learn how to quickly analyze your assignment requirements and start building a great paper early.</li>" +
  "<li>For more help on how to narrow your topic, try the <a href='https://kingsu.libguides.com/research/narrowing#s-lg-box-15996969' target='_blank'>research tips and tricks</a> from King’s University.</li>" +
  "</ul>" +
  "<h5>Percent time spent on this step: 5%</h5>";

StepBody[1] ="<p>Now that you have selected a topic, it is time to gather sources. A good place to start your research is the <a href='https://library.uwinnipeg.ca/' target='_blank'>library website</a>, but you can also use tools like <a href='https://uwinnipeg.idm.oclc.org/login?url=https://scholar.google.ca/' target='_blank'>Google Scholar</a>. Search for your main topics along with the different subtopics you determined during the previous step, one at a time. It might take several tries to find relevant results. Don’t get discouraged!</p>" +
  "<p>Make sure to download or save any relevant texts and articles you find as you go and note the full reference.</p>" +
  "<ul>" +
  "<li>If you’re not sure where to start, or if you’re feeling stuck, <a href='https://library.uwinnipeg.ca/use-the-library/help-with-research/talk-to-someone.html' target='_blank'> connect with the Library</a>. We’re here to help!Come to the Reference Desk, contact us online via <a href='https://libanswers.uwinnipeg.ca/chat/widget/199987abca6c2b68002cd5131f147bf4' target='_blank'>our help chat</a>, or schedule an appointment with a librarian.</li>" +
  "<li>Watch our video <a href='https://library.uwinnipeg.ca/use-the-library/help-with-research/searching-for-sources.html' target='_blank'>Searching for Academic Sources</a> to learn how to construct thoughtful searches to find academic sources for your paper.</li>" +
  "<li>Our video <a href='https://library.uwinnipeg.ca/use-the-library/help-with-research/finding-scholarly-sources.html' target='_blank'>Finding Scholarly Sources</a> will give you strategies for identifying academic sources so you know you’re using credible information in your paper.</li>" +
  "</ul>" +
  "<h5>Percent time spent on this step: 15%</h5>";

StepBody[2] = "<p>The more time you spend reading and understanding your sources, the less energy you’ll need to write your paper. For every relevant source you find, take the time to identify the most useful sections. Note any interesting ideas, data, or facts and the page where you found it. Once you’re done reading, summarize the whole source in your own words.</p>" +
  "<ul>" +
  "<li>Watch our video <a href='https://www.youtube.com/watch?v=298y6Beap88' target='_blank'>Understand the Scholarly Article (part 2)</a> to learn how academic papers are structured.</li>" +
  "<li>The University of Connecticut offers resources on <a href='https://writingcenter.uconn.edu/wp-content/uploads/sites/593/2014/06/How_to_Summarize_a_Research_Article1.pdf' target='_blank'> how to summarize a research article</a>[pdf].</li>" +
  "</ul>" +
  "<h5>Percent time spent on this step: 25%</h5>";

StepBody[3] = "<p><strong>A.</strong> It’s now time to create your thesis statement. A thesis statement condenses and articulates your paper’s argument or main claim. It should be brief, one or two sentences long, dealing with a specific topic, and arguable.</p>" +
  "<p><strong>B.</strong> You’ll also need to create your outline. Try to imagine what questions will be addressed in each section of your paper and how each section will flow into the next. Ensure that each section ties in with your thesis statement and that all subtopics are adequately addressed. Note which sources, facts, and evidence you will use in each section to support your claims. One source can appear in multiple sections of your paper, that’s perfectly okay.</p>" +
  "<ul>" +
  "<li>For more help on how to construct a good thesis statement, check <a href='https://academicguides.waldenu.edu/writingcenter/writingprocess/thesisstatements' target='_blank'>Walden University’s tips</a>.</li>" +
  "<li>You can also try their <a href='https://academicguides.waldenu.edu/writingcenter/writingprocess/outlining' target='_blank'>outlining strategies</a> or look at the <a href='https://advice.writing.utoronto.ca/planning/organizing/' target='_blank'> University of Toronto’s guide to organizing an essay</a>.</li>" +
  "</ul>" +
  "<h5>Percent time spent on this step: 10%</h5>";


StepBody[4] = "<p>It’s finally time to write! Refer to your outline and develop your paper by using the notes from your readings. Add your own thoughts and commentaries on the ideas you found in the resources. Don’t forget to include in-text citations to indicate the source of each idea you’re using.</p>" +
  "<p>It’s okay if the writing is not perfect at this stage—you’ll have time to revise your draft later.</p>" +
  "<ul>" +
  "<li>The Writing Centre gives you access to multiple <a href='https://www.uwinnipeg.ca/writing-centre/resources-for-writers.html' target='_blank'>resources on academic writing</a>.</li>" +
  "</ul>" +
  "<h5>Percent time spent on this step: 20%</h5>";

StepBody[5] = "<p>Take the time to revise your draft, focusing on the organization and arguments of your paper. Check your assignment guidelines (step 1) and make sure you meet all of the criteria described. Verify that the introduction, thesis, and conclusion are clear and logical and that all of your ideas are sufficiently developed. Ensure that the text flows smoothly and work on your transitions or rearrange your ideas if necessary.</p>" +  
  "<ul>" +  
  "<li>Check out these tips on <a href='https://crk.umn.edu/writing-center/how-revise-drafts' target='_blank'>how to revise your first draft</a> from the University of Minnesota Crookston.</li>" +  
  "</ul>"+
  "<h5>Percent time spent on this step: 20%</h5>";   


StepBody[6] ="<p>To ensure the academic honesty of your work, properly reference each in-text citation you created. Copy and paste the full reference you created in step 2 into the bibliography, works cited, or references section at the end of your paper. Make sure you meet the guidelines of the citation style you’re required to use (see the assignment guidelines you noted earlier).</p>" +  
  "<p>Take a break after writing and before starting proofreading. Once you’re ready, read over your text a few times and review any mistakes in grammar, punctuation, etc. You can read your paper out loud in a tape recorder or ask someone to read it to you to help you catch any mistakes. Ensure the format of your paper follows all your assignment guidelines (step 1).</p>" +  
  "<ul>" +  
  "<li>Watch our video about <a href='https://library.uwinnipeg.ca/use-the-library/help-with-research/citing-and-referencing-sources.html' target='_blank'>Citing and Referencing Sources</a>.</li>" +  
  "<li>Check the Writing Centre <a href='https://www.uwinnipeg.ca/writing-centre/resources-for-writers.html' target='_blank'>resources on style, grammar, and punctuation</a> to help you proofread your assignment.</li>" +  
  "</ul>"+
  "<h5>Percent time spent on this step: 5%</h5>";


StepBody[7] = "<p>You did it! Submit your assignment, and you’re done. Congratulations!</p>";  


function showPanels() {
  for (i = 1; i <= StepTimes.length; i++) {
    var PanelName = "step" + i + "Panel";
    document.getElementById(PanelName).style.display = "block";

    //hide the default text
    document.getElementById("disclaimerStatement").style.display = "none";
  }
}

function hidePanels() {
  for (i = 1; i <= StepTimes.length; i++) {
    var PanelName = "step" + i + "Panel";
    console.log('PanelName: ' + PanelName);
    document.getElementById(PanelName).style.display = "none";
  }
  //show the default text    
  document.getElementById("disclaimerStatement").style.display = "inline";
}


function clearData() {
  document.getElementById("startDate").value = "";
  document.getElementById("endDate").value = "";
  document.getElementById("daysBetweenStatement").innerHTML = "";

  hidePanels();

  return false;
}

function saveData() {
  var startDateMoment = moment(document.getElementById("startDate").value, "MM/DD/YYYY");
  console.log('startDateMoment: ' + startDateMoment);
  var endDateMoment = moment(document.getElementById("endDate").value, "MM/DD/YYYY");
  console.log('endDateMoment: ' + endDateMoment);

  startTime = startDateMoment;
  endTime = endDateMoment + 43200000;
  timeDiff = endTime - startTime;
  daysBetween = Math.floor(timeDiff / 86400000);

  console.log('daysBetween: ' + daysBetween);

  //don't show the steps! (bad date range)
  if (daysBetween <= 0 || isNaN(daysBetween)) {
    document.getElementById("daysBetweenStatement").innerHTML = "<br/><b>Please enter a valid date range.</b>\n";

    hidePanels();
  }

  //show the steps! (show the step divs)
  if (daysBetween > 0) {
    document.getElementById("daysBetweenStatement").innerHTML = "Starting on: " + moment(startDateMoment).format("MMMM Do YYYY") + "<br/>Ending on: " + moment(endDateMoment).format("MMMM Do YYYY") + "<br/><b>According to the dates you have entered, you have " + daysBetween + " days to finish.</b>";

    var workingTime = startTime;
    for (i = 1; i <= StepTimes.length; i++) {
      //set the title
      var divStepTitle = "stepTitle" + i;
      document.getElementById(divStepTitle).innerHTML = StepTitles[i - 1];

      //set the body
      var divStepBody = "stepBody" + i;
      document.getElementById(divStepBody).innerHTML = StepBody[i - 1];

      var dateDuration = StepTimes[i - 1] * daysBetween;

      //convert to time
      var timeDuration = dateDuration * 86400000

      //add duration to original date
      //new date becomes working date
      workingTime = workingTime + timeDuration

      //convert workingtime to a date
      var readableDate = new Date(workingTime);
      var divStepName = "step" + i + "date";

      if (i == numSteps) {
        //set the last step equal to the last date they entered
        document.getElementById(divStepName).innerHTML = "By " + moment(endDateMoment).format("MMMM Do YYYY");
      } else {
        document.getElementById(divStepName).innerHTML = "By " + moment(readableDate).format("MMMM Do YYYY");
      }
    }

    //show the step panels
    showPanels();

  }
  return false; // this will stop default submit of form (because by default form submit on "action" url if no action is define than on same page )
}
