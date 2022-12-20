# Management Information System

## Document :
System Requirement Specification Document

## Title :
System Requirement for Transflower Management Information System

## Team : 
Trainers,HR,Board of Members,Management Team


## Objective()
Management Information System is intendet to use for decision-making, coordination, control, analysis, and visualization of 
information in an organization. Management Information System is intended to provide entire idea to Top Level Management, HR, Trainers to make decisions with respect to data gathered from various sources through single gateway using internet .
This application will help to analyze the data and show it to the approriate user.

## Definition




## Functional Requirements:
It regulates that proper resources are provided in the institute so that we can add value and profit to
business.
CMO ,CEO or CTO(chief mentor officer ) are responsible for implementations of new technology that
institute will adopt.
Basically we can say it is the core heart of any organisation which monitor each and everything from
recruitment of trainers to student enrolment along with proper resource requirement and what
more things will be adopted in future in the organisation. It's roots are spread throughout the whole organisation.

Trainer:
1)seprate login system
2)Dashboard for trainers/faculty:
        Profile details 
        CTC sal
        prev modules taken and current module
        number of students enrolled in his/her module(graph form)
        feedback from students
        num of lectures taken in current module
        feedback taken from trainer
        what more resources required for betterment of lecture
        how many posts updated on community post
3) dashboard for Hr
        profile details 
        all faculty details ()
        payroll and benifits management
        talent acquisition and retaintion
        resource handling /time-resource management
        student details 
        feedback/complaints/reviews from faculty-trainer
        Employee welfare 
4) dashboard for chief mentor /management
        currently enrollled students,faculty
        assesement - reviews of faculty
        satisfication index of student , faculty 
        yearly placements
        new functionalilites added - activities , recent improvements 
        future activities/functionalities to be added 
        revenue generated 
5)  dashboard for sysadmin
        crud operations for users
        display all details of all entities

## Non Functional Requirements:

<h4>Security</h4>
Registered Member or Employee will allowed to view dashboard with his all information gathered from all departments and also can view his profile and make changes. 
Each Member will be to access system through authentication process. 
Who are you ? System will provide access to the content ,operations using Role based security (Authorization) (Permissions based on Role). Using SSL in all 
transactions which will be performed stakeholder. It would protect confidential information shared by system to stake holder of Shared by stakeholder to system. 
System will automatically log out of all stakeholder after some time due to inactiveness. System will block operations for inactive stakeholder and would redirect for 
authentication. System will internally maintain secure communiction channel between Servers ( Web Servers, App Servers, databse Server) Sensitive data will be always 
encrypted across communcation. User proper firewall to protect servers from out side fishing, velnerable attacks.

Reliability
The system will backup business data on regular basis and recover in short time duration to keep system operational Continous updates are matained , continous 
Adminstration is done to keep system operational. During peak hours system will maintain same user experience by managing load balancing .

Availability
uptime: 24* 7 available 99.999%

Maintainability:
A Commercial database software will be used to maintain System data Persistence. A readymade Web Server will be installed to host the Web Site to
management server capabilities. IT operations team will easily monitor and configure System using Adminstrative tools provided by Servers. Separate enviornment will 
be maintained for system for isolation in production, testing, and development.

Portablility:
PDA: Portable Device Application System will provide portable User Interface ( HTML, CSS, JS) through users will be able to access the Web Site. 
System can be deployed to single server, multi server, to any OS, Cloud (Azure or AWS or GCP)

Accessibility:
only registered members will be able to access the site and view the data after authentication. Management team can reject or approve updation, deletion requests based 
on role provided. 
BOD team will be able to view daily, weekly, monthly, annual businss Growth throgh customized dashboard. Members will be able to see their performance graph.

    Durability:
	System will retain customer shopping cart for 15 minutes even though customer loose internet connection and join again. System will maintain wishlist for customer . 
	customer will be able to add products from wishlist and add to shopping cart whenever needed. System will implement backup and recovery for retaining stake holders data, 
	bussiness operation data and business data over time.

	Efficiency:
	On Festival season, maximum number of users will place order, view products with same response time. System will be able to manage all transactions with isolation.

	Modularity:
	System will designed and developed using reusable, independent or dependent business senarios in the form of modules. These modules will be loosely coupled and highly 
	cohesive. System will contain CRM , Inventory , shopping cart, order processing, payment processing, Delivery module, membership and Roles managment modules.

Scalability:
System will be able to provide consistent user exeprience to stake holder as well as vistors irrespective of load.

Safety:
WebSite will be secure from malicious attack, fishing. WebSite portal functionalilites are protected from outside with proper firewall 
configuration. WebSite portal will be always kept updated with latest anti virus software. Bussiness data will be backed up periodically to ensure safety of 
data using incremental back up strategy. Role based security will be applied for Application data and operations accessibility.
