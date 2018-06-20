function contact (name, photo, position, organization, email){
    this.name = name;
    this.photo = photo;
    this.position = position;
    this.organization = organization;
    this.email = email;
}

var contactList = [
    new contact("Diksha Gupta", "diksha2.png", "President", "CSGSA", "dgupta@unm.edu"),
    new contact("Chrysm Watson Ross", "chrysm2.png", "Vice President/President", "CSGSA/UNM WinC", "chrysm@cs.unm.edu"),
    new contact("Humayra Tasnim", "humayra2.png", "Secretary", "CSGSA", "htasnim30@unm.edu"),
    new contact("Jose Abel Castellanos Joo", "jose2.png", "Treasurer", "CSGSA", "jabelcastellanosjoo@unm.edu"),
    new contact("Bianca Bologa", "bianca2.png", "Co-chair", "ACM-UNM", "bbologa@unm.edu"),
    new contact("Joanna Dickerson", "joanna.png", "Co-chair", "ACM-UNM", "jojodickerson@unm.edu"),
    new contact("Elizabeth Esterly", "elizabeth2.png","Member", "ACM-UNM","eesterly@unm.edu"), 
    new contact("Nikan Chavoshi", "nikan.png", "Member", "UNM WinC", "chavoshi@unm.edu"),
    new contact("Zeinab Akhavan", "zeinab2.png", "Secretary", "UNM WinC", "zakhavan@unm.edu"),
    new contact("Trilce Estrada", "trilce2.png", "Faculty Advisor", "CSGSA", "estrada@cs.unm.edu"),
    new contact("Lance Williams", "lance2.png", "Faculty Advisor", "ACM-UNM", "williams@cs.unm.edu")
];
var i, j = false;
for(i = 0; i < contactList.length; i++){
    if(i % 4 == 0){
	document.write("<div class='right_article1'>");
	j = true;
    }
    document.write("<a style='color:#838383' class='outer1'> <img src='images/contact/" + contactList[i].photo + "' class='img1' width='100' height='100'><br>" + contactList[i].name + "<br>" + contactList[i] .position + "<br>" + contactList[i].organization + "<br>" + contactList[i].email + "</a>");
    if(i % 4 == 3){
	document.write("</div>");
	j = false;
    }
}
if(j){
    document.write("</div>");
}
