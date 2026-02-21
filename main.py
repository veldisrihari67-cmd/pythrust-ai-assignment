import requests
import json

API_KEY = 'AIzaSyA3X14YIwdudLaJ0JwjR9p3b5QpbRL-TOc'

def get_working_model():
    list_url = f"https://generativelanguage.googleapis.com/v1beta/models?key={API_KEY}"
    res = requests.get(list_url)
    if res.status_code == 200:
        models = res.json().get('models', [])
        for m in models:
            if 'generateContent' in m['supportedGenerationMethods']:
                return m['name'] 
    return None

def call_gemini(model_name, prompt_text):
    url = f"https://generativelanguage.googleapis.com/v1beta/{model_name}:generateContent?key={API_KEY}"
    headers = {'Content-Type': 'application/json'}
    data = {"contents": [{"parts": [{"text": prompt_text}]}]}

    response = requests.post(url, headers=headers, data=json.dumps(data))
    if response.status_code == 200:
        return response.json()['candidates'][0]['content']['parts'][0]['text']
    else:
        return f"ERROR: {response.status_code} - {response.text}"

with open('design_system.json') as f:
    tokens = json.load(f)

def run_agentic_loop():
    active_model = get_working_model()
    if not active_model:
        print("Could not find an active model. Please check your API Key.")
        return

    print(f"Using Model: {active_model}")

    print("Step 1: Generating Component...")
    prompt = f"Create an Angular component for a login card. Use ONLY these styles: {tokens}. Return ONLY raw code."
    code = call_gemini(active_model, prompt)

    print("Step 2: Validating...")
    if tokens['primary_color'].lower() in code.lower():
        print("Success: Validated!")
        return code
    else:
        print("Color missing. Self-Correcting...")
        fix_prompt = f"Rewrite this code. You MUST include color {tokens['primary_color']}:\n{code}"
        return call_gemini(active_model, fix_prompt)

final_code = run_agentic_loop()

if final_code and "ERROR" not in final_code:
    with open('output_component.ts', 'w') as f:
        f.write(final_code)
    print("\n--- DONE! ---")
    print("1. Download 'output_component.ts' from the folder icon.")
    print("2. You are ready for GitHub!")
else:
    print(final_code)
