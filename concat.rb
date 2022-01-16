# 1. Write a program that uses variables to store a first and last name, then prints the full name in one line using string concatenation (the + operator).

first_name = "Laura"
last_name = "Keeley"

full_name = first_name + " " + last_name

puts full_name

# 2. Write a program that uses variables to store a first and last name, then prints the full name in one line using string interpolation (the #{} operator).

first_name = "Laura"
last_name = "Keeley"

full_name = "#{first_name} #{last_name}"

puts full_name

# 3. Write a program that asks the user to input a word. If the word is "marco", print "polo".

# puts "Enter a word"

# word = gets.chomp

# if word == "marco"
#   puts "polo"
# else
#   puts "try again"
# end

# 4. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).

color1 = "red"
color2 = "blue"
color3 = "purple"

puts "When you mix " + color1 + " and " + color2 + " you get " + color3 

# 5. Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the #{} operator).
color1 = "red"
color2 = "yellow"
color3 = "orange"

puts "#{color1} and #{color2} make #{color3}"

# 6. Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."

# puts "Enter a name:"

# name = gets.chomp

# if name != "Santa"
#   puts "You're not Santa!"
# else
#   puts "Santa?!"
# end

# 7. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string concatenation (the + operator).

title = "Be Here Now"
author = "Ram Dass"

puts author + " wrote a book called " + title

# 8. Write a program that uses variables to store a book's title and author, then prints out a sentence using that information with string interpolation (the #{} operator).

title = "You are a Badass"
author = "Jen Sincero"

puts "#{author} wrote a book called #{title}"

# 9. Write a program that asks the user to enter a password. If the password is "Joshua", the program responds "Shall we play a game?". For any other password, the program responds "Access denied"

puts "Enter a password:"

password = gets.chomp

if password == "Joshua"
  puts "Shall we play a game?"
else
  puts "Access denied"
end

# 10. Write a program that uses variables to store the names of three cities, then prints out a sentence using that information with string concatenation (the + operator).

city1 = "Eau Claire"
city2 = "Albuquerque"
city3 = "Providence"

puts "I met my friend in " + city3 + " even though I'm from " + city1 + " and she's from " + city2


# SOLUTIONS: https://gist.github.com/peterxjang/79ba5acc912a86cce2a18c2f14b1c712