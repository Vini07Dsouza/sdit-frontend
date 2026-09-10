import type { ChatResponse } from "@/types/chat";

/**
 * Smart mock chat responses for SDIT AI Assistant (SDIT NOVA)
 * providing accurate, institution-verified guidance on courses, admissions,
 * placements, campus facilities, and contact details.
 */
export async function getMockChatResponse(
  message: string,
  sessionId?: string,
): Promise<ChatResponse> {
  await new Promise((resolve) => setTimeout(resolve, 800));

  const lower = message.toLowerCase();
  let answer = "";
  const sources: string[] = ["SDIT Official Prospectus 2026", "Admissions & Academics Cell"];

  if (
    lower.includes("course") ||
    lower.includes("branch") ||
    lower.includes("engineering") ||
    lower.includes("degree") ||
    lower.includes("program")
  ) {
    answer =
      "Shree Devi Institute of Technology (SDIT), Mangaluru offers premier undergraduate (B.E.) and postgraduate (MBA, MCA) programs:\n\n1. **Computer Science & Engineering (CSE)**\n2. **Artificial Intelligence & Machine Learning (AI & ML)**\n3. **Information Science & Engineering (ISE)**\n4. **Electronics & Communication Engineering (ECE)**\n5. **Mechanical Engineering**\n6. **Civil Engineering**\n7. **MBA & MCA Post-Graduate Programs**\n\nAll programs are approved by AICTE, affiliated to Visvesvaraya Technological University (VTU Belagavi), and recognized by Govt. of Karnataka.";
  } else if (
    lower.includes("admission") ||
    lower.includes("eligibility") ||
    lower.includes("apply") ||
    lower.includes("seat")
  ) {
    answer =
      "### SDIT Admissions 2026-27\n\n- **B.E. Eligibility**: Pass in 10+2 / PUC with Physics and Mathematics as mandatory subjects, along with Chemistry / Biotechnology / Computer Science / Electronics, securing a minimum of 45% marks (40% for reserved categories).\n- **Entrance Exams Accepted**: KCET, COMEDK, and Management Quota.\n- **How to Apply**: You can apply online through our admissions portal or visit the SDIT campus admission office in Kenjar, Mangaluru.";
  } else if (
    lower.includes("placement") ||
    lower.includes("package") ||
    lower.includes("recruiter") ||
    lower.includes("job")
  ) {
    answer =
      "### SDIT Training & Placements\n\nSDIT has a dedicated Training & Placement Cell that provides comprehensive career guidance, aptitude training, coding bootcamps, and mock interviews.\n\n- **Top Recruiters**: Infosys, Wipro, TCS, Cognizant, IBM, Capgemini, Amazon, and leading core engineering firms.\n- **Highest Package**: Up to ₹18 LPA.\n- **Average Package**: ₹4.5 - ₹6.5 LPA.";
  } else if (
    lower.includes("campus") ||
    lower.includes("facility") ||
    lower.includes("hostel") ||
    lower.includes("library") ||
    lower.includes("sports")
  ) {
    answer =
      "### SDIT Campus & Facilities\n\nLocated in Kenjar, Mangaluru, SDIT provides a world-class educational environment:\n\n- **Central Library**: Extensive collection of technical books, international journals, and digital e-resources (IEEE, Delnet).\n- **Hostels**: Separate, secure hostel facilities for boys and girls with modern mess and recreation rooms.\n- **Labs & Computing**: State-of-the-art computer labs with high-speed internet and licensed engineering software.\n- **Sports & Recreation**: Dedicated grounds for cricket, football, basketball, badminton, and indoor games.";
  } else if (lower.includes("fee") || lower.includes("tuition") || lower.includes("cost")) {
    answer =
      "Fee structures at SDIT vary by course and entry quota (KCET, COMEDK, or Management). For detailed category-wise fee breakdowns, scholarship opportunities, and fee payment schedules, please contact the SDIT Admissions Office directly or check the Admissions section on our website.";
  } else if (
    lower.includes("contact") ||
    lower.includes("phone") ||
    lower.includes("email") ||
    lower.includes("address") ||
    lower.includes("location")
  ) {
    answer =
      "### SDIT Contact Information\n\n- **Address**: Shree Devi Institute of Technology, Airport Road, Kenjar, Mangaluru, Karnataka - 574142.\n- **Email**: info@sdit.ac.in\n- **Phone**: +91 824 2254300 / 2254400\n- **Office Hours**: Monday to Saturday (9:00 AM – 5:00 PM)";
  } else {
    answer = `Hello! I'm SDIT NOVA, your official SDIT AI Assistant. I understand you are asking about: "${message.trim()}".\n\nAt SDIT Mangaluru, we offer top-tier engineering programs (CSE, AI&ML, ISE, ECE, Mech, Civil) and professional PG degrees (MBA, MCA) with excellent placement support.\n\nHow can I help you with admissions, course details, campus facilities, or placements today?`;
  }

  return {
    answer,
    sources,
    ...(sessionId ? { session_id: sessionId } : {}),
  };
}
