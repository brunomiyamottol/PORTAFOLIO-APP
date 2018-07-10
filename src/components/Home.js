'use strict'; 
import React, { Component } from 'react'; 
import CarouselPage from './CarouselPage'; 
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';  
import '../styles/styles.scss'; 

export default class Home extends Component {
render() {
	return (
		<div >
			<CarouselPage />
				<Jumbotron>
					<h2>Continuously develop the passion for learning, understanding and processing information that influences how we perceive and interact with reality.</h2>

					<p>In order to find the answer to the question who I am, I began to analyze the opinion of others around me about me. Not sure if it helped me, in some way this attempt even more confused me. Here are some examples of my observations.</p>

					<p>I’m fond of the World of Tanks computer game. Recently, in this game, I joined a clan, consisting of adult players mostly. Thanks to my skills and achievements in the game, I was noticed. When other players nominated me as a field commander, I was happy and proud. Many of my real friends are envious of me. When my grandmother learnt that, she said that I was doing a nonsense, I should rather read the book.</p>
					
					<p>Not so long ago, at school I received a task to write an essay about my favorite artist. I decided to honestly approach this task and wrote about Wu-Tang Clan. Me teacher did not appreciate my honesty and evaluated my work extremely low, although there were few visible errors. In her argumentation, she made it clear that she thinks that I have a bad taste and I need to reconsider my hobbies. It turns out, if she likes the music of the 80s, then I also should like it? I was very upset that day. But my mother surprised me and turned out to be on my side. I let her listen couple songs of Wu-Tang Clan (of course I picked up the ones that she could like more) and she liked them. To my surprise, it turned out that we understand the meaning of some songs in different ways, but it even added interest to this topic and we spent an evening with mom in conversations and discussions on various topics. To tell the truth, such conversations do not happen to us often. Probably not in vain.</p>
					
					<p>And still, my mother sometimes says that I am careless and selfish, and I do not care about anyone else. At the same time, about once every two months I am the volunteer in the nursing home. And I do it not for encouragement, but because I really want it and get pleasure from the fact that I bring joy and help someone.</p>
					
					<p>Like most young people, I do not like to wear trousers and jackets, for which I often get unpleasant comments from teachers. Official clothes seem uncomfortable and boring to me. I love comfortable clothes. Sneakers, jeans and a T-shirt with a print, what can be better and more comfortable? This is my style, in this clothes I feel as comfortable as possible. By the way, my dad in this matter agrees absolutely with me, not to mention my friends and classmates.</p>
					
					<p>The differences in opinions are illustrated even by my grades. For example, a physical education teacher praises me and foresees a sports career in college. And the teacher of mathematics considers that I am stupid and lazy. The point is that I have no mathematical mindset and no matter how hard I try, I find it difficult to master the program.</p>
				</Jumbotron>
				</div>
   );
	}
}
