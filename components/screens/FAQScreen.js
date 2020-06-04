import React from 'react';
import { 
    View, 
    Button,
    Text
} from 'react-native';
import { Container, Content, Accordion } from "native-base";

const dataArray = [
    { title: "How does MyQuickShift work?", content: "This is a platform which connects clients with temporary jobseeker. Clients are able to open job offers and candidates are able to apply for jobs offers. Planned jobs, work contracts created and payments will all be initiated via this single platform. Both parties are in control of their working time/hours and can rate each other." },
    { title: "Verification?", content: "Once your account is completed, one of our recruiters will check all your information to ensure the accuracy of your application. The verification process can take up to a few days, due the high volume of candidate applications and the requirement/quality that must be met. You will also be invited to an Induction Day; where you know more about MyQuickShift.This is an opportunity for us to know more about you (and also your skill sets and experience). This will allow us to know the role that best suits you. After the induction day, your account will be verified for the specific roles and give you access to the jobs/shifts on our amazing platform. You’re ready to go! #WorkSmarter"},
    { title: "How does the rating system work?", content: "After every shift, the client will give you a rating from one to five stars on your performance. The rating comes as a summary of all your ratings. This is visible to other clients when you apply for shifts. Clients can see the summary as well as the history of your ratings specifically for the role you apply for."},
    { title: "How and when do I get paid?", content: "For every completed shift, you must confirm the exact worked hours. After you have confirmed, the client will also confirm it. Payment will then be arranged into your account within 5 working days." 
                                                      + '\n\n' + "Please ensure you check in and out correctly. As a precaution, check if you have correctly filled in your bank details."
                                                      + '\n\n' + "Go to My Accounts > My Shifts > Payments"
                                                      + '\n\n' + "If there are any mistakes in your payment, please email payment@myquickshift.com."},
    { title: "How much do I get paid?", content: "You get paid from £8 per hour and this will be specified in the shift offered."},
    { title: "How do I qualify for next day payments?", content: "You will need to meet the criteria below:"
                                                                  + '\n' + '\u2055' + " Completed 5 shifts"
                                                                  + '\n' + '\u2055' + " 4 or more rating star"
                                                                  + '\n' + '\u2055' + " Ensure you always enter the correct worked hours"
                                                                  + '\n\n' + "Please note if you worked on Friday, Saturday and Sunday, you will be paid by the next Monday."},
    { title: "Canceling a shift?", content: "You can cancel a shift online, but please note that cancellations within 24 hours of the shift start time will go against your account (you’re allowed 2 strikes). If it is a last-minute cancellation, you must call MyQuickShift or Client and state your reasons for cancellation."},
    { title: "Do I have to pay tax?", content: "By law, all income is subject to income tax. Use this service (https://www.gov.uk/estimate-income-tax) to estimate how much Income Tax and National Insurance you should pay for the current tax year (6 April 2020 to 5 April 2021)."},
    { title: "Rating/Review", content: "This is will allow the client and candidate to rate each other on the shift carried out."
                                        + '\n' + "The 5-star rating system works as below:"
                                        + '\n\n' + "5* Great Worker   |    4* Good    |    3* Adequate    |    2* Inadequate    |    1* Terrible"},
    { title: "Attendance (Check In & Out)", content: "Candidates must check-in (on our platform under MY SHIFT) as soon as they arrive at the agreed place of work. Candidates must then check-out before leaving the place of work (again, on our platform under MY SHIFT)."
                                                      + '\n\n' + "The client will then verify or correct the time recorded for that particular shift (on our platform)."
                                                      + '\n\n' + "For any reason if a candidate is unable to check-in and/or check-out on the shift, the candidate can do so at a later date but should do so as soon as possible thereafter. Alternatively, the Client can check-in and check-out for the candidate."},
    { title: "Blocking access to MyQuickShift", content: "MyQuickShift is entitled to block your access if you violate the Terms and Conditions. MyQuickShift is also entitled to exclude your access to MyQuickShift’s platform if you violate our obligations towards the Client, in particular event of an unjustified absence from a shift or failure to comply with the Client’s instructions."},
    { title: "Who should I contact when I arrive at my" + '\n' + " shift?", content: "Follow the instruction given on the shift description. If you're unsure when you arrive, say who you are, that you are there to work for the specific client and that you are with MyQuickShift. If you can't find a client contact on site, contact MyQuickShift via email support@myquickshift.com or via Live Chat immediately."},
    { title: "How old do I have to be to use MyQuickShift?", content: "You must be aged 18 or over. MyQuickShift will confirm your age before you are verified."},

];

export default function FAQScreen({navigation}) {
    
    return(
        <Container>
        <Content padder>
          <Accordion
            dataArray={dataArray}
            icon="add"
            expandedIcon="remove"
            iconStyle={{ color: "#9c71b3" }}
            expandedIconStyle={{ color: "grey" }}
          /> 

          <Text style={{textAlign: 'center', marginTop: '10%'}}>If your question is not answered, please email @myquickshift.com</Text>
        </Content>
      </Container>
    )
} 