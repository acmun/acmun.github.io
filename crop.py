from PIL import Image
import os

for i in os.walk('images/bg'):
	files = i

for i in files[-1]:
	original = Image.open("images/bg/%s" %(i)) 
	width, height = original.size
	cropped_example = original.crop((0, 90, width, height-190))
	#cropped_example.show()
	cropped_example.save("images/bg/crop-%s" %(i), "JPEG")