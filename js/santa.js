const tl = new TimelineMax({
	repeat: -1
})

const svg = document.querySelector('svg')

const scene1 = {
	wrapper: svg.querySelector('.scene1'),
	arm: svg.querySelector('#arm_3_'),
	face: svg.querySelector('.face'),
	bag: svg.querySelector('#bag_1_'),
	body: svg.querySelector('.body'),
	deerHead: svg.querySelector('#head_1_'),
	armLeft: svg.querySelector('#arm_4_'),
	armRight: svg.querySelector('#arm2_1_'),
	deerBody: svg.querySelector('#body_2_')
}

// Deer
tl.from(scene1.deerHead, 0.75, {
	rotation: '+=5deg',
	transformOrigin: '80% 50%',
	repeat: 1,
	repeatDelay: 0.25,
	yoyo: true,
	ease: Linear.easeNone
}, 0)

tl.from(scene1.deerHead, 0.5, {
	x: '-=2',
	y: '+=2',
	transformOrigin: '80% 40%',
	repeat: 3,
	yoyo: true,
	ease: Linear.easeNone
}, 0)

tl.from(scene1.armLeft, 1, {
	rotation: '+=15deg',
	transformOrigin: '100% 80%',
	repeat: 1,
	yoyo: true,
	ease: Linear.easeNone
}, 0)

tl.from(scene1.armRight, 1, {
	rotation: '-=10deg',
	transformOrigin: '100% 80%',
	repeat: 1,
	yoyo: true,
	ease: Linear.easeNone
}, 0)

tl.from(scene1.deerBody, 1, {
	y: '+=5',
	rotation: '-=5',
	transformOrigin: '40% 80%',
	repeat: 1,
	yoyo: true,
	ease: Linear.easeNone
}, 0)

// Santa
tl.from(scene1.arm, 1, {
	rotation: '+=10deg',
	transformOrigin: '80% 40%',
	repeat: 1,
	yoyo: true,
	ease: Linear.easeNone
}, 0)

tl.from(scene1.face, 1, {
	rotation: '+=5deg',
	transformOrigin: '80% 40%',
	repeat: 1,
	yoyo: true,
	ease: Linear.easeNone
}, 0.2)

tl.from(scene1.face, 0.5, {
	x: '+=10',
	transformOrigin: '80% 40%',
	repeat: 3,
	yoyo: true,
	ease: Linear.easeNone
}, 0.2)

tl.from(scene1.bag, 1, {
	rotation: '-=2deg',
	transformOrigin: '30% 0%',
	repeat: 1,
	yoyo: true,
	ease: Linear.easeNone
}, 0.2)

tl.from(scene1.body, 0.5, {
	y: '+=3',
	transformOrigin: '30% 0%',
	repeat: 3,
	yoyo: true,
	ease: Linear.easeNone
}, 0.2)

tl.timeScale(1.55);