# Angular Tutorial

In this video we are gonig to see 
how to create angular app and  it's component.
firstly you need to install Angular cli on your system.

let's install it.


# npm install -g @angular/cli
this will install angular cli globally on your system.

now next step.
create angular app and name it FirstApp.

to create angular app run command
ng new (app name)

it will create angular app.
as you can see on left side a folder with name FirstApp has been created.

# now run our angular app
 you can use both ng serve or npm start to run angular app on local host.

oops! i forget we have to run npm start in same directory where the all angular files are.
here which is in FirstApp.

[Port 4200 is already in use.] as it says already running on port 4200.

here on 4200 port my anothere angular app is running but on your device it will open localhost on port 4200 bt default

as you can see we have created our first angular app. 

# Create component
now let's create component and name it fistcomponent.

to create component run command
ng g c (component name)

here:
g - is for generate.
c - is for component.

you new component will be create in src folder.

let's do it.

 as you can see on left side a new folder it create with name firstcomponent.
 and others files like html, css, .ts will will created automatically.

 in next video will see how to import compenent.
 thanks for watching. 
 like share and subscribe.

# importing component

in last video we saw creating commponent and angular app.

in this video we will saw how to import component.

we will create  one more component and then import it to display on browser.

to create component run command

ng g c (component name)

Warning: while create component there should be no space in name of component.

let check our browser first.
now here we are going to import out component in app.component.html

#how to import component

<app-[componentname]></app-[componentname]>

this is how we can import component in angular 
if you have any query ping in on discord.
code available on github.

Thanks For watching.

# Icons in Angular

In last video we saw how to use component.
in this video we will see how to use fontawesome icons in angular.

let's open fontawesome on browser.

to use fontawesome in angular we have to install
NPM package of fontawesome icons

1. npm i @fortawesome/angular-fontawesome
2. npm i @fortawesome/fontawesome-svg-core
3. npm i @fortawesome/free-solid-svg-icons

you can use yarn too, depends on  you what use want to use.
now let's install it via terminal.  

Now after installation 
we have to  import fontawesome in app.module.ts
[check video on youtube for understanding]
as you can see we can now see the coffecup icon on browser :)

thanks for watching subscribe to channel and share
for any query ping me on discord
