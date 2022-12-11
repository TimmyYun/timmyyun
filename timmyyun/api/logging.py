from datetime import datetime


def log(filename, message):
    with open(f"logs/{filename}", "a") as the_file:
        the_file.write(f"{message} {datetime.now().strftime('%d/%m/%Y %H:%M:%S')}\n")
        