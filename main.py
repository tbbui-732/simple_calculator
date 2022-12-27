# Simple four function calculator
# Written in Python with PyQT module

import sys
from PyQt6.QtWidgets import (
        QApplication,
        QGridLayout,
        QLineEdit,
        QMainWindow,
        QPushButton,
        QVBoxLayout,
        QWidget,
        )

class calc_window(QMainWindow):
    def __init__(self): 
        super().__init__()
        self.setWindowTitle("Calculator")
        centralWidget = QWidget(self)
        self.setCentralWidget(centralWidget)

def main():
    # Initializing the calculator's application GUI
    app = QApplication([])
    window = calc_window()

    # Running the application
    window.show()
    sys.exit(app.exec())

# Button functionalities
# 0-9, add, sub, mult, div
# enter and delete
button_layout = QGridLayout()
one = QPushButton()
button_layout.addWidget(one)


