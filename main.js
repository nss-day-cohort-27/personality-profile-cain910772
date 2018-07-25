
const myProfile = {

// myProfile.profile = {}; 
// myProfile.communication = []; 




 myPerson: {
	firstName: "William",
	lastName: "Prater",
    age: 40,
    info:[],
    peopleLikeMe:["Bill Gates","Ellen Page","Kristen Stewart","Albert Einstein"],
    communication1:"I would best communicate with my little sib through mind meld like a Vulcan!",
    communication2:"I like face to face , one on one meetings so I can pick your brains",
    communication3:"I would like my team mates to communicate via assigned times for conferencing over where we are at"
	
    
    },
    

}
const myStatements1="They love patterns, and spotting discrepancies between statements could almost be described as a hobby"
const myStatements2="The one thing that really holds INTPs back is their restless and pervasive fear of failure. INTP personalities are so prone to reassessing their own thoughts and theories, worrying that they’ve missed some critical piece of the puzzle, that they can stagnate, lost in an intangible world where their thoughts are never truly applied"
const myStatements3="They may appear to drift about in an unending daydream, but INTPs’ thought process is unceasing, and their minds buzz with ideas from the moment they wake up. This constant thinking can have the effect of making them look pensive and detached, as they are often conducting full-fledged debates in their own heads, but really INTPs are quite relaxed and friendly when they are with people they know, or who share their interests. However, this can be replaced by overwhelming shyness when INTP personalities are among unfamiliar faces, and friendly banter can quickly become combative if they believe their logical conclusions or theories are being criticized."
myProfile.info.push(myStatements1)
console.log(info);
 const myStatementsDis1 = "INTPs are unlikely to understand emotional complaints at all,I disagree with this as being logical can help you determine someones real reason for whatever emotion they are experiencing"
 const myStatementsDis2 ="Usually known as the philosopher, the architect, or the dreamy professor,not true, I hate Philosophy!"
 const myStatementsDis3 = "People who share the INTP personality type aren’t interested in practical, day-to-day activities and maintenance,this is sort of true, however, my wife makes me pay attention or I get yelled at:)"



const saveDatabase = function (databaseObject, localStorageKey) {
 const stringifiedDatabase = JSON.stringify(databaseObject)
 localStorage.setItem(localStorageKey, stringifiedDatabase)
} 
saveDatabase (myProfile , "myProfile2 ");

const loadDatabase = function (localStorageKey) {
const databaseString = localStorage.getItem(localStorageKey)
return JSON.parse(databaseString)
}
console.log(loadDatabase("myProfile2 "));



