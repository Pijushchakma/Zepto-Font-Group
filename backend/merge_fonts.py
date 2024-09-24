from fontTools.ttLib import TTFont
from fontTools.merge import Merger
import sys
import os


def merge_fonts(input_files, output_file):
    merger = Merger()
    
    try:
        new_font = merger.merge(input_files)
        new_font.save(output_file)
    except Exception as e:
        return


if __name__ == "__main__":
    input_files = sys.argv[1:-1]
    output_file = sys.argv[-1]
    merge_fonts(input_files, output_file)


# from fontTools.ttLib import TTFont
# from fontTools.merge import Merger

# # List of fonts to merge
# fonts = [
#    "/opt/lampp/htdocs/uploads/fonts/HappySwirly-KVB7l.ttf",
#     "/opt/lampp/htdocs/uploads/fonts/LoveDays-2v7Oe.ttf",
#     "/opt/lampp/htdocs/uploads/fonts/RebellionSquad-ZpprZ.ttf",

# ]

# # Merge the fonts
# merger = Merger()
# new_font = merger.merge(fonts)

# # Save the merged font
# new_font.save("merged_font.ttf")
