// Your need to create several classes for Posts.Implement the following classes: Post, which is initialized with title (String) and content (String) The 2 arguments should be public members; The Post class should also have toString() function which returns the following result:
// 'Post: {postTitle}'
// 'Content: {postContent}'
//  SocialMediaPost, which inherits the Post class and should be initialized with 2 additional arguments
// - likes (Number) and dislikes (Number). The class should hold:
// o comments(Strings) - an array of strings
// o addComment(comment)- a function, which adds comments to that array
// o The class should extend the toString() function of the Post class, and should return the
// following result:
// 'Post: {postTitle}'
// 'Content: {postContent}'
// 'Rating: {postLikes - postDislikes}' 'Comments: * {comment1} *{comment2}'
// BlogPost, which inherits the Post class:
// o The BlogPost class should be initialized with 1 additional argument - views(Number).
// o The BlogPost class should hold
// - view() - which increments the views of the object with 1, every time it is called. The function
// should return the object, so that chaining is supported.
// o The BlogPost class should extend the toString() function of the Post class, and should
// return the following result:
// 'Post: {postTitle}'
// 'Content: {postContent}'
// 'Views: {postViews}'
function solve(){

    class Post{
        constructor(title,content){
           this.title = title;
           this.content = content;
        }
        toString(){
            return`Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes){
            super(title,content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
        toString(){
            let bla = super.toString();
            let commentsToStr = this.comments.map(c => ` * ${c}`).join('\n');    
            let fullCommentsToStr = this.comments.length > 0 ? `Comments:\n${commentsToStr}` : '';     
            let result = '';
            if(this.comments.length > 0){
                result = `${bla}\nRating: ${this.likes - this.dislikes}\n${fullCommentsToStr}`;
            }else{
                result = `${bla}\nRating: ${this.likes - this.dislikes}`;
            }
            return result;
        }
        addComment(com){
            this.comments.push(com);
        }
    }

    class BlogPost extends Post{
        constructor(title, content, views){
            super(title, content);
            this.views = views;
        }
        view(){
            this.views = this.views + 1;
            return this;
        }
        toString(){
            let bla = super.toString();
            return `${bla}\nViews: ${this.views}`;
        }
    }

    return {Post, SocialMediaPost, BlogPost}
}

const classes = solve();
let post = new classes.Post('Post', 'Content');
//console.log(post.toString());

let smp = new classes.SocialMediaPost("MyTitle", "MyContent", 25, 30);
// smp.addComment("Good post");
// smp.addComment("Very good post");
// smp.addComment("Wow!");
console.log(smp.toString());

let blog = new classes.BlogPost("Blog", "Kuku lala", 10);
blog.view();
blog.view();
console.log(blog.toString());