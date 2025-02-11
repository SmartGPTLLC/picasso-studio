from escpos.printer import Usb

def print_receipt(image_path):
    try:
        # Replace with your printer's vendor and product IDs
        printer = Usb(0x04b8, 0x0e15)
        printer.image(image_path)
        printer.cut()
        return True
    except Exception as e:
        print(f"Printer error: {e}")
        return False 