# Portfolio-Website
My personal and professional website, built entirely with agentic AI workflows.

## About
I have a gaming computer (that I purchased and sadly never use), that was collecting dust
and cobwebs. Then I got word through a dear friend that you could actually run your very
own LLM, using Ollama, if you have decent enough hardware. Half hard and riddled with
excitement at that point, I got into digging around to investigate how to do this.
After all, it was as easy as choosing a LLM to download, installing Ollama, and
downloading/fetching the model to then run in Ollama. Keep in mind the models
are quite big in size. The [qwen2.5-coder:14b](https://ollama.com/library/qwen2.5-coder:14b) was 9GB itself,
and [Google's more powerful gemma4-12b](https://huggingface.co/unsloth/gemma-4-12b) is a whopping ~24GB.
It was as easy as downloading and installing Ollama, downloading the model of choice (Gemma4),
and running `ollama run ${modelName}`. The following are my gaming computer hardware specs:

CPU: AMD Ryzen 9 9800X3D
Video Card/VRAM: RTX Geforce 5070Ti 16GB
RAM: Trident 48GB DDR5 6000mhz

Its helpful to run your OS's process monitoring application, so you can see whether or not your
VRAM is full, in which case the processes spill out from your VRAM and into the rest of your
machine's resources.