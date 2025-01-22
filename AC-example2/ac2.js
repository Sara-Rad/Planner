
var StepTimes = [.09, .1, .1, .13, .13, .15, .2, .05, .05];
var numSteps = StepTimes.length;

var StepTitles = [
  "Step 1 - Understand your assignment | 5%",
  "Step 2 - Do your research  | 20%",
  "Step 3 - Write your draft thesis statement  | 5%",
  "Step 4 - Write your outline  | 10%",
  "Step 5 - Write your draft | 20%",
  "Step 6 - Revise your draft | 25%",
  "Step 7 - Finalize your references | 5%",
  "Step 8 - Proofread and format your final draft | 10%",
  "Step 9 - Submit your assignment | 0%"

];

//Remember that the array is 0 based. So 0 is actually step 1, 1 is step 2 and so on...
//in order to use the " character within a body's string, use the \ character before it.
var StepBody = [];
StepBody[0] = "<p>Read through your assignment guidelines and note requirements such as citation style and page limits.</p>" +
  "<p>If your topic is broad (e.g. 'write an essay about healthcare') then narrow or focus your topic before you start researching.</p>" +
  "<p>For more about narrowing your topic, try:</p>" +
  "<ul>" +
  "<li><a href='https://uregina.libguides.com/c.php?g=606324' target='_blank'>Developing a Topic for a Research Paper: Narrowing Your Topic</a>, a quick video (3 minutes) plus tips, from University of Regina's Archer Library.</li>" +
  "<li><a href='https://www.library.unlv.edu/services/instruction/tutorials/topic_narrowing/' target='_blank'>University of Nevada Las Vegas's Topic Narrowing tool</a>, for a mind mapping approach.</li>" +
  "</ul>";

StepBody[1] = "<p>Gather research from credible sources to develop your topic. There are many places to search for credible information, including the SFU Library or Google Scholar.</p>" +
  "<p>Review the information you find to understand your topic. You will want to pay attention to relevant beliefs, trends, thoughts, and facts, giving more emphasis to the kinds of information your assignment asks you to focus on.</p>" +
  "<p>For more on finding and evaluating sources, see:</p>" +
  "<ul>" +
  "<li><strong>Understanding the Scholarly Article pts. 1-3</strong> For how to identify and evaluate scholarly journals, magazines, and trade publications -- both print and online.</li>" +
  "<li><strong>Choosing and Evaluating Scholarly Sources:</strong> Tips for finding and evaluating the reliability of publications, whether you find them on the open web, in the Library Catalogue, using Google Scholar, or elsewhere.</li>" +
  "<li><strong>Search the UW Library</strong> for tips for books, and journal articles, and tips from subject expert librarians.</li>" +
  "</ul>"

StepBody[2] = "<p>Create an overall statement that both summarizes your research and indicates the significance of your main claim or argument.</p>" +
  "<p>Not every research paper needs an argumentative thesis statement, but if you’re asked to take a position on a topic, then your thesis statement should also be debatable.</p>" +
  "<p>Remember that an effective thesis statement presents both your main claim and your central reasons for making that claim.</p>" +
  "<p>You can always adjust your thesis statement as you draft your paper.</p>" +
  "<p>Looking for more?</p>" +
  "<ul>" +
  "<li>Try these tips on <a href='https://academicguides.waldenu.edu/writingcenter/writingprocess/thesisstatements' target='_blank'>constructing a thesis statement</a> from Walden University.</li>" +
  "<li>You can also review these <a href='/about/branches-depts/slc/writing/argumentation/templates-structuring-argumentative-essays' target='_blank'>templates for argumentation</a>, from the SFU Student Learning Commons.</li>" +
  "<li><strong>Writing the argumentative essay ppt</strong></li>" +
  "</ul>";

StepBody[3] = "<p>Outline the main sections and/or paragraphs you plan to write about in your paper.</p>" +
  "<p>Each section or paragraph should tie in with your thesis statement. In your outline, make notes about how each section of your paper relates to your thesis statement.</p>" +
  "<p>Also note which facts, articles, and/or evidence you will use to support your claims.</p>" +
  "<ul>" +
  "<li>Try these suggestions for the <a href='https://academicguides.waldenu.edu/writingcenter/writingprocess/outlining' target='_blank'>essential sections of an outline</a> from Walden University.</li>" +
  "<li>The University of Toronto's <a href='http://advice.writing.utoronto.ca/planning/organizing/' target='_blank'>guide to organizing an essay</a> has some good outlining examples.</li>" +
  "</ul>";

StepBody[4] = "<p>Refer to your outline and expand your ideas into complete sentences and paragraphs.</p>" +
  "<p>The writing doesn't need to be perfect -- just focus on getting your ideas written and solidifying the key points of your paper.</p>" +
  "<p>Note the research sources you think you will write about and/or use as evidence in your paper in your outline. Be sure to include where you found the information, who the author is, and when the source was published.</p>" +
  "<p>For more:</p>" +
  "<ul>" +
  "<li>Review these tips for <a href='https://hsp.berkeley.edu/writingdraft' target='_blank'>writing a first draft</a> from Berkeley.</li>" +
  "<li>Stuck? See these tips for overcoming writer's block: <a href='https://academicguides.waldenu.edu/writingcenter/writingprocess/writersblock' target='_blank'>Writers Block</a> (from Walden University) and <a href='https://owl.purdue.edu/owl/general_writing/the_writing_process/writers_block/index.html' target='_blank'>Symptoms and Cures for Writer's Block</a> (from Purdue University).</li>" +
  "</ul>";

StepBody[5] = "<p>Revision takes time.</p>" +
  "<p>In this step, look again at your thesis and make sure your paper advances your argument. At this point you might need to make structural changes.</p>" +
  "<p>Where revision asks you to look at the structure, organization, and overall argument in your paper, editing is about taking a close look at your sentence structures, transitions, and the concision of your writing.</p>" +
  "<p>For more detailed tips and examples:</p>" +
  "<ul>" +
  "<li>Check out <a href='https://writingcenter.fas.harvard.edu/pages/revising-draft' target='_blank'>Revising the Draft</a> from the Harvard College Writing Center</li>" +
  "<li>To ensure your paper meets the assignment guidelines, and to check for cohesion, try <a href='https://writing.wisc.edu/handbook/process/reverseoutlines/' target='_blank'>Reverse Outlines: A Writer's Technique for Examining Organization</a> (University of Wisconsin - Madison).</li>" +
  "</ul>";

StepBody[6] = "<p>Make sure that all your sources are properly integrated and cited. This step is important for ensuring academic integrity.</p>" +
  "<ul>" +
  "<li>Review the <a href='/help/cite-write/citation-style-guides' target='_blank'>guidelines of the citation style</a> you have been asked to use (e.g. APA, MLA, Chicago).</li>" +
  "<li>When do you need to cite? Test your knowledge with the <a href='/help/academic-integrity/plagiarism-tutorial' target='_blank'>SFU plagiarism tutorial</a>.</li>" +
  "<li>Need more help? <a href='https://library.uwinnipeg.ca/use-the-library/help-with-research/talk-to-someone.html' target='_blank'>Ask a Librarian</a> your citation question.</li>" +
  "</ul>";

StepBody[7] = "<p>Review the style, clarity and flow of your writing. Focus on individual sentences and look for common errors in sentence structure, punctuation, grammar, or usage. Read your work out loud to help you catch mistakes. Printing out and checking a hard copy can also help you to notice typos that you might miss on the screen. </p>" +
  "<p>Finally, format your paper to fit all your assignment guidelines.</p>" +
  "<ul>" +
  "<li>Try these techniques for <a href='https://owl.purdue.edu/owl/general_writing/mechanics/sentence_clarity.html' target='_blank'>sentence clarity</a> from Purdue University.</li>" +
  "<li>Review these <a href='/about/branches-depts/slc/writing/revising/self-help-editing-tips' target='_blank'>Top 10 Self-Help Editing Tips</a> from the Student Learning Commons</li>" +
  "</ul>";

StepBody[8] = "<p>Submit your assignment, and you're done!</p>" +
  "<p>Remember that your instructor will provide you with helpful feedback on your assignment that can help you to improve both your writing and your writing process for future work. </p>";

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