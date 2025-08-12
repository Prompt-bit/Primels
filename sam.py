features = {
    "name": "SAM",
    "description": "Protect your PC",
    "version": "1.0.0",
    "author": "Prompt",
    "license": "MIT",
    "url": "sam.py",
    "icon": "sam_icon.png",
    "dependencies": ["os", "sys"],
    "commands": [
        {
            "name": "start",
            "description": "Start the SAM service",
            "function": "start_sam_service"
        },
        {
            "name": "stop",
            "description": "Stop the SAM service",
            "function": "stop_sam_service"
        }
    ],
    "config": {
        "enabled": True,
        "settings": {
            "auto_start": True,
            "log_level": "info"
        }
    }     
}
print("Start of sam.py")
print("SSSSSSS")
print(features)