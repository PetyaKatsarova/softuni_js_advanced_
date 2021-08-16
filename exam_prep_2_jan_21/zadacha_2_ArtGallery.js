// Constructor
// Should have these 4 properties:
//     • creator - string 
//     • possibleArticles - { "picture":200,"photo":50,"item":250 }
//     • listOfArticles - empty array 
//     • guests - empty array
// At the initialization of the ArtGallery class, the constructor accepts only the creator! 
// The possibleArticles is an object, and the submitted values are by default and represent the available article models ("picture", "photo", "item"), which will be displayed in the gallery and the necessary points for purchasing a specific article.

// addArticle( articleModel, articleName, quantity )
//  This method adds article to the art gallery. Method accepts 3 arguments:
//     • articleModel (string);
//     • articleName (string);
//     • quantity (number);
//     • If the articleModel, is not present in possibleArticles object with specified default models, an error with the following message should be thrown:
//         "This article model is not included in this gallery!"
// Note that the resulting articleModel argument can be submitted in both lowercase and uppercase letters and will be correct, and no error should be thrown see the example below: 
// articleModel - ("picture") ->correct
// articleModel - ("Picture") ->correct
// articleModel - ("PICTURE") ->correct
//     • If the articleName already exists in listOfArticles array and the articleModel is the same just add the new quantity to the old one.
//     • Otherwise, should add the articleModel, articleName, quantity to listOfArticles array in following format: {articleModel, articleName, quantity}. The articleModel must be toLowerCase().
//     • And finally, return the following message:
// "Successfully added article {articleName} with a new quantity- {quantity}."

// inviteGuest ( guestName, personality)
//  Accept 2 arguments: guestName (string), personality (string) If the guestName is already present in the guests array, throw a new error:"{guestName} has already been invited." Otherwise, create a new record in the guests array in following format: {guestName, points, purchaseArticle: default 0}. Where the points are the points that the guest has. With them he can buy an article. They are determined depending on personality (see the table below).Example- ("Ivan", "Vip") -> the points are 500  [ If you get a personality that is not present in the table below, put 50 points ("Petar", "Normal")->50 points)];
// The property purchaseArticle will record the number of customer purchases, initially at the invitation of the guest the value is zero.• Finally, return the message: "You have successfully invited {guestName}!"
// Personality Point "Vip" 500 "Middle" 250

// buyArticle ( articleModel, articleName, guestName)
//   Accept 3 arguments: articleModel (string), articleName (string) and guestName (string)
//     • If the articleName is not found in listOfArticles array or the articleModel doesn’t match, throw a new error:
//         "This article is not found."
//     • If the quantity of the current article is equal to 0, return message:
//                    "The {articleName} is not available."
//     • If the guestName is not present in the guests array, return message:
//                "This guest is not invited."
//     • Otherwise, you need to check if the guest has the required number of points to purchase the article. (The necessary points of the article are determined by the model in possibleArticles array)
//         ◦ If the points are not enough to buy an article, return the following message:
//          "You need to more points to purchase the article."
//         ◦ If they are enough, you need to reduce the current points of the guest by according to the points of model article in possibleArticles array, reduce the quantity of the current article and increase the number of purchases of the guest.
//     • Finally, return message:
// "{guestName} successfully purchased the article worth {articlePoint} points."
// The articlePoint is the value at which the article was purchased.  

// showGalleryInfo (criteria)
// Accept 1 argument-criteria. This method return gallery information based on the criteria.  Possible values for the criterion are two types:
// •  If the criterion is-"article"- then you need to return all the information about the articles saved in listOfArticle array in following format:
// • On first line show the following message:
// "Articles information:"
// • On the lines, display information about each article:
// {articleModel} - {articleName} - {quantity}
// • If the criterion is-"guest"- then you need to return all the information about the guests saved in guest array in following format:
//     ◦ On first line show the following message:
//   "Guests information:"
//     ◦ On the lines, display information about each guest:
//                     {guestName} - {purchaseArticle} 



class ArtGallery{
    constructor(creator){
       this.creator = creator;
       this.possibleArticles = { picture:200,photo:50,item:250 };
       //{articleModel, articleName, quantity}
       this.listOfArticles = [];
       //{guestName, points: status, purchaseArticle: 0}
       this.guests = [];
    }

    addArticle( articleModel, articleName, quantity ){
        articleModel = articleModel.toLowerCase();
        if(!Object.keys(this.possibleArticles).some(key => key === articleModel)) throw Error(`This article model is not included in this gallery!`);

       // {articleModel, articleName, quantity}
       let is = true;
        this.listOfArticles.forEach(el => {
            if(el.articleModel === articleModel){
                el.quantity = el.quantity + quantity;
                is = false;
            }
        });
        if(is){
            this.listOfArticles.push({articleModel, articleName, quantity});
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality){
        if(this.guests.some(g => g.guestName == guestName)) return `${guestName} has already been invited.`;//throw Error(`${guestName} has already been invited.`);
        let status = 50;
        if(personality == 'Vip') status = 500;
        if(personality == 'Middle') status = 250;
        this.guests.push({guestName, points: status, purchaseArticle: 0});
        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName){
        if(!this.listOfArticles.some(el => el.articleName == articleName) ||
        !Object.keys(this.possibleArticles).some(key => key === articleModel.toLowerCase())){
            throw new Error(`This article is not found.`);
        }
        this.listOfArticles.forEach(el => {
            if(el[articleName] == articleName && el[quantity] == 0){
                return `The ${articleName} is not available.`;
            }
        });
        if(!Object.entries(this.guests).some(g => g.guestName === guestName)) return `This guest is not invited.`;

       let necessaryPoints = this.possibleArticles[articleModel];
       let g = this.guests.find(obj => obj.guestName == guestName);
       if(g.points < necessaryPoints) return `You need to more points to purchase the article.`;
       g.points = g.points - necessaryPoints;

       this.listOfArticles.forEach(obj => {
           if(obj.articleName == articleName){
               this.obj.quantity = this.obj.quantity - 1;
           }
       }); 

        this.guests.forEach(obj => {
            if(obj.guestName === guestName){
                obj.purchaseArticle = obj.purchaseArticle + 1;
            }
        });
        return `${guestName} successfully purchased the article worth ${necessaryPoints} points.`;

    }
    showGalleryInfo(criteria){
        let result = [];
        if(criteria === "article"){
            result.push("Articles information:");
            this.listOfArticles.forEach(obj => {
                //{articleModel, articleName, quantity}
                console.log(obj);
                 result.push(`${obj.articleModel} - ${obj.articleName} - ${obj.quantity}`);
            });
        }else if(criteria === "guest"){
            result.push("Guests information:");
           // {guestName, points: status, purchaseArticle: 0}
           this.guests.forEach(obj => {
             result.push(`${obj.guestName} - ${obj.purchaseArticle}`);
           });
        }
        return result.join('\n');
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
// Successfully added article Mona Liza with a new quantity- 3.
// Successfully added article Ancient vase with a new quantity- 2.
// Successfully added article Mona Liza with a new quantity- 1.

console.log(artGallery.inviteGuest('John', 'Vip'));
console.log(artGallery.inviteGuest('Peter', 'Middle'));
console.log(artGallery.inviteGuest('John', 'Middle'));
// // You have successfully invited John!
// // You have successfully invited Peter!
// // John has already been invited.
console.log(artGallery.showGalleryInfo('guest'));
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery);