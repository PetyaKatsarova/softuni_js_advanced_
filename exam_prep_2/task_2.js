// Write an Story Class, which supports the described functionality below.
// Functionality: constructor(title, creator)
// Should have these 4 properties:
//  title - string
//  creator - string
//  comments - private property (empty array by default)
//  likes - private property (empty array by default)
// Note: Choose the most helpful structure for the likes array for you.
// Getter likes ()
// This function should print the likes in the following format:
//  If there are no likes, the following message should be returned:
// '{title} has 0 likes'
//  If there is one like, the following message should be returned:
// '{username} likes this story!' Otherwise, the following message should be returned:
// '{username of the first person that liked the story} and {likes - 1} others like this
// story!'
// like (username)
// This function should increase the likes of the story.
//  If the username, has already liked the story, an error with the following message should be thrown:
// 'You can't like the same story twice!'
//  If this user is the creator of the story, an error with the following message should be thrown: 'You can't like your own story!'
//  Otherwise, the following message should be returned:
// '{username} liked {title}!'
// dislike(username)
// This function should decrease the likes of the story.
//  If the username, didn't like the story in the first place, an error with the following message should be
// thrown: "You can't dislike this story!" Otherwise, the following message should be returned: "{username} disliked {title}"
// comment (username, content, id)
// This function should make a new comment or reply to a comment with a given id.
//  If the given id is equal to undefined or there is not a comment with that id, you should make a new comment and add it to the comments array. Every comment should have an id (1, 2, 3 ...) which represents the order the comments are submitted. If the comment is made successfully, the following message should be returned: "{username} commented on {title}'
//  If there is a comment with the given id, you should add a reply to it. The reply should have an id (1.1, 1.2 ...) constructed from the id of the comment and the order in which the replies are submitted. If the reply is made successfully the following message should be returned:
// 'You replied successfully' Comments should have the following structure:
// {Id, Username, Content, Replies}
//  Replies should have the following structure: {Id, Username, Content}
// toString(sortingType)
// This function should return the story information in the following format:
//  If the sorting type is "asc" - The comments and replies should be sorted by id in ascending order  If the sorting type is "desc" - The comments and replies should be sorted by id in descending order  If the sorting type is "username" - The comments and replies should be sorted by username in ascending order
// 'Title: {title}
// Creator: {creator}
// Likes: {likes}
// Comments:
// -- {id}. {username}: {content}
// -- {id}. {username}: {content}
// --- {replyId}. {username}: {content}
// --- {replyId}. {username}: {content}
// -- {id}. {username}: {content}
// ...'
//If there are no comments print only the text 'Comments:' in the comments section of the toString method.

class Story{
    constructor(title, creator){
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    } 

    get likes(){
        if(this._likes.length === 0){
            return `${this.title} has 0 likes`;
        }
        if(this._likes.length === 1){
            return `${this._likes[0]} likes this story!`;
        }
        return `${this._likes[0]} and ${this._likes.length-1} others like this story!`;
    }

    like(username){
        if(this._likes.includes(username)){
            throw new Error(`You can't like the same story twice!`);
        };
        if(username === this.creator) throw new Error(`You can't like your own story!`);
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username){
        if(!this._likes.includes(username)) throw new Error("You can't dislike this story!");
        this._likes = this._likes.filter(el => el !== username);
        return `${username} disliked ${this.title}`;  
    } 

    comment(username, content, id){
        if(id === undefined || !this._comments.some(el => el.Id === id)){
            let tempId;
            //this._comments.length === 0 ? tempId = 1 : tempId = this._comments.length+1;
            let newComment = {Id: this._comments.length+1, Username:username, Content: content, Replies: []};
            this._comments.push(newComment);
            return `${username} commented on ${this.title}`;
        }

        let commentToReplyTo = this._comments.find(el => el.Id === id);
        // let repId = commentToReplyTo.Id + 0.1;
        // repId = commentToReplyTo.Replies.length === 0 ? repId : Number((repId += 0.1).toFixed(2));
        let replyNextId = commentToReplyTo.Replies.length+1;
        let repId = Number(`${commentToReplyTo.Id}.${replyNextId}`)
        
        commentToReplyTo.Replies.push({Id: repId, Username:username, Content: content});  

        return 'You replied successfully';
    }
//If there are no comments print only the text 'Comments:' in the comments section of the toString method.
    sortingStaff(type, arr){
        if(type === "asc"){
            arr = arr.sort((a,b) => {
                Number(a.Id) - Number(b.Id);
            });
        }else if(type === "desc"){
            arr = arr.sort((a,b) => Number(b.Id) - Number(a.Id));
        }else if(type === "username"){
            arr = arr.sort((a,b) => a.Username.localeCompare(b.Username));
        }
        return arr;
    }

    toString(sortingType){
        // const sortVersion = {
        //     asc: (a,b) => a.Id - b.Id,
        //     desc: (a,b) => b.Id - a.Id,
        //     username: (a,b) => a.Username.localeCompare(b.Username)
        // }
        let temp = this._comments.slice();
        
        let result = [`Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:`];
        if(temp.length === 0){
            return result[0];
        }
        // sort the comments and their replies
        let sortedComments = this.sortingStaff(sortingType, temp);

        sortedComments.forEach(el => {
            result.push(`-- ${el.Id}. ${el.Username}: ${el.Content}`);
            if(el.Replies){
                let sortedReplies = this.sortingStaff(sortingType, el.Replies);
                sortedReplies.forEach(r => {
                   // {Id, Username, Content, Replies}
                    result.push(`--- ${r.Id}. ${r.Username}: ${r.Content}`);

                })
            }
        });
        
        return result.join('\n');
    }
}


let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);

art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log(art.toString("desc"));
console.log()
art.like("Zane");
console.log();
console.log(art.toString("username"));
// John likes this story!
// My Story has 0 likes
// Ammy commented on My Story
// You replied successfully

// Title: My Story
// Creator: Anny
// Likes: 0
// Comments:
// -- 2. Ammy: New Content
// -- 3. Jessy: Nice :)
// -- 1. Sammy: Some Content
// --- 1.2. SAmmy: Reply@
// --- 1.1. Zane: Reply
